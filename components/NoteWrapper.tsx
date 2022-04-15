import React, { useState } from "react";
import { deleteSingleNote, getAvailableLanguages, ServerNote, shareNote } from "../API/notes";
import {MdDelete} from 'react-icons/md';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import axios from "axios";
import { deleteDoc } from "firebase/firestore";
import { HiShare } from "react-icons/hi";
import { useRouter } from "next/router";

const NoteWrapper = (data: ServerNote) => {
  
  // ! Variables
  const elementD = document.getElementById(`${data.Id}-Description`)
  const elementT = document.getElementById(`${data.Id}-Title`)
  const [loading, setLoading] = useState(false);

  // todo:  Translate function
  const translate = async(to:string) =>{

    if(!elementD || !elementT) return;

    const text = data.Title+"&nbsp;"+data.Description;
    const url = "https://text-translate-by-darshan.herokuapp.com/api/translate";
    const body = {
      text,
      to,
      delimeter:"&nbsp;"
    }
    await axios.post(url, body).then(res => {
      elementT.innerHTML = res.data.Title;
      elementD.innerHTML = res.data.Description;
      console.log(res.data.Description);
      
    }).catch(err => console.error({err}))
  }

  //  todo: Delete note funtion
  const deleteNote = async() =>{
    setLoading(true);
    const success = await deleteSingleNote(data.Id);
    setLoading(false);
  }

  // todo: share note function
  const share = async() =>{
    const success = await shareNote(data);
    if(success)
    {
    const shareLink = `https://daily-utils-3.vercel.app/shared/${data.Id}`;
    navigator.clipboard.writeText(shareLink);
    document.getElementById(`${data.Id}-share-div`)?.classList.add("swap-active")
    }
  }

  return (
    <>
      <div className="card w-96 h-96 m-5 bg-primary  text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {data.Title} <div className="badge badge-secondary">{data.Tag}</div>{" "}
          </h2>
          <p >{data.Description}</p>
          <div className="card-actions justify-end">
            <label htmlFor={`${data.Id}-preview-modal`} className="btn btn-secondary modal-button">OPEN</label>
            <button onClick={deleteNote} className={`btn btn-secondary ${loading && 'loading'}`} ><MdDelete/></button>
            <button className="btn btn-secondary" onClick={share} ><div id={`${data.Id}-share-div`} className="swap swap-rotate"><div className="swap-on"><IoMdCheckmarkCircleOutline/></div><div className="swap-off"><HiShare /></div></div></button>
          </div>
        </div>

        {/* //todo: Modal Content Start */}

        <input type="checkbox" id={`${data.Id}-preview-modal`} className="modal-toggle" />
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
              <button   className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(data.Title+"\n"+data.Description)} >Copy</button>
              <select onChange={(e) => translate(e.target.value)} className="select select-secondary bg-secondary " >
                {getAvailableLanguages().map((item, index) =>{
                  return(
                    <option key={index}  value={item.code}>{item.name}</option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        {/* //todo: Modal Content End */}
      </div>
    </>
  );
};

export default NoteWrapper;
