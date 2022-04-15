import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Database from "../../API/database";
import { getAvailableLanguages, ServerNote } from "../../API/notes";

const SharedNote = () => {
  const [data, setData] = useState<ServerNote>();
  const router = useRouter();
  const { noteId } = router.query;
  const [loading, setLoading] = useState(true);

  
  // todo:  Translate function
  const translate = async (to: string) => {
      const elementD = document.getElementById(`${data?.Id}-Description`);
      const elementT = document.getElementById(`${data?.Id}-Title`);
    if (!elementD || !elementT) return;

    const text = data?.Title + "&nbsp;" + data?.Description;
    const url = "https://text-translate-by-darshan.herokuapp.com/api/translate";
    const body = {
      text,
      to,
      delimeter: "&nbsp;",
    };
    await axios
      .post(url, body)
      .then((res) => {
        elementT.innerHTML = res.data.Title;
        elementD.innerHTML = res.data.Description;
        console.log(res.data.Description);
      })
      .catch((err) => console.error({ err }));
  };

  useLayoutEffect(() => {
    const getDetails = async () => {
      noteId &&
        (await getDoc(doc(Database, "SharedNotes", noteId as string)).then(
          (note) => {
            setLoading(false);
            if (note.data()) {
              const { Title, Description, Tag } = note.data() as ServerNote;
              setData({
                Title,
                Description,
                Tag,
                Id: note.id,
              });
            }
          }
        ));
    };
    getDetails();
  }, [noteId]);

  return data ? (
    <>
      <div className="card w-96 h-96 m-5 bg-primary  text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {data.Title}
            <div className="badge badge-secondary">{data.Tag}</div>
          </h2>
          <p>{data.Description}</p>
          <div className="card-actions justify-end">
            <label
              htmlFor={`${data.Id}-preview-modal`}
              className="btn btn-secondary modal-button"
            >
              OPEN
            </label>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id={`${data.Id}-preview-modal`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative bg-primary text-primary-content ">
          <label
            htmlFor={`${data.Id}-preview-modal`}
            className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 id={`${data.Id}-Title`} className="text-lg font-bold">
            {data.Title}
          </h3>
          <p id={`${data.Id}-Description`} className="py-4">
            {data.Description}
          </p>
          <div className="modal-action">
            <button
              className="btn btn-secondary"
              onClick={() =>
                navigator.clipboard.writeText(
                  data.Title + "\n" + data.Description
                )
              }
            >
              Copy
            </button>
            <select
              onChange={(e) => translate(e.target.value)}
              className="select select-secondary bg-secondary "
            >
              {getAvailableLanguages().map((item, index) => {
                return (
                  <option key={index} value={item.code}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="h-full w-full grid place-items-center text-3xl text-primary">
      <h1 className={` btn btn-ghost select-none ${loading && "loading"} `}>
        {loading ? "Fetching Data" : "Invalid ID Provided!"}
      </h1>
    </div>
  );
};

export default SharedNote;
