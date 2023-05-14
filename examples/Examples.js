import React from "react";
import { ReactStackedPhotos } from "../dist/index";

export default function Examples() {
  return (
    <div className="main">
      <ReactStackedPhotos width={200} height={200}>
        <div
          isHovering={{ transform: "rotate(5deg) translateX(30px)" }}
          default={{ transform: "rotate(5deg)" }}
        >
          <div className="flex">
            <img
              src="https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Photo.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="lk">Karl Droggos</div>
          </div>
        </div>
        <div
          isHovering={{ transform: "rotate(2deg) translateX(3)" }}
          default={{ transform: "rotate(2deg)" }}
        >
          <img
            src="https://th.bing.com/th/id/R.8b7fad01da5367c68c467bd6948670fd?rik=KFSmp6damF3c3Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-GOOCS9LbwP8%2fTaz7HOWknfI%2fAAAAAAAAACs%2fV7sR0wpvMKM%2fs1600%2fCute%2bPuppy%2bDog.jpg&ehk=c2CdJK42k3Sc83ZNT7zEIYYZmfyLA15lZDuWBu7FdUM%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          isHovering={{ transform: "rotate(-5deg) translateX(-30px)" }}
          default={{ transform: "rotate(-5deg)" }}
        >
          <img
            src="https://th.bing.com/th/id/R.fbb965fdc665d0bd4f8da283797a01a8?rik=lIO7W69%2flMx8MQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_fU7LdRkUMVM%2fTJTouRK_dTI%2fAAAAAAAAChM%2fO08EDbQJTwA%2fs1600%2fcute-baby-dog.jpeg&ehk=3ComR3Gf7XCD8wEKZXLMBPSkzlgxYZ7790TXto%2bJj3A%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </ReactStackedPhotos>
    </div>
  );
}
