import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";


const Details = () => {
//   const [grievance, setgrievance] = useRecoilState(grievanceState);
  const history = useHistory();


  return (
    <div className="main-datail-container content-wrapper">
 <div className="disc-container">
   <div className="status">Status: <span>PROCESSING</span></div>
   <div className="inner-detail-text">
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   </div>
 </div>
 <div className="replies-title">Replies:</div>
 <div className="reply-card-container">
    <div className="reply-user-date">
        <div className="username">demo ashu</div>
        <div className="reply-date">2022-08-15</div>
    </div>
    <div className="user-reply">
    Simple React Card a Nice Simple React Card by Jamie Halvorson. codepen See the Pen Simple React Card by Jamie Halvorson (@jamiehalvorson) on CodePen.
    </div>
    <div className="attachment-file">
        <div>download File
            <div>file-name</div>
        </div>
        <div className="download-icon">
        <a href ="../img/download.png" attributes-list download > <img src="../img/download.png"/> </a>  
        
        
        </div>
    </div>

 </div>
    </div>
  );
};

export default Details;