import '../../styles/hobby.scss';
import CodePenEmbed from '../../EditCode/CodePenEmbed';

import ridingvideo from '../../images/hobby/riding.MP4';

import ReactPlayer from 'react-player'
import { useEffect, useRef, useState } from "react";

function Hobby() {
    const videoRef = useRef(null);
    return (
        <div className='hobby'>
            <div className='body'>
                <svg xmlns="http://www.w3.org/2000/svg" width="698.48" height="437.165" viewBox="0 0 698.48 437.165">
                <g id="undraw_Ride_till_I_can_no_more_44wq" transform="translate(-238.52 -236.744)">
                    <path id="Path_1" data-name="Path 1" d="M393,568.357l18.71,52.1L401,657.857h20l8-42.5-5-63Z" fill="#3f3d56" />
                    <path id="Path_10" data-name="Path 10" d="M792.345,786.9l-.728-.1a80.08,80.08,0,0,0-7.2-46.807A64.449,64.449,0,0,0,773.046,723.4l.509-.531a65.255,65.255,0,0,1,11.518,16.793A80.814,80.814,0,0,1,792.345,786.9Z" transform="translate(-54.852 -112.992)" fill="#fff" />
                    <path id="Girl_Back_Hair" data-name="Girl Back Hair" d="M558.746,381.227c-8.829-14.918-26.3-15.613-26.3-15.613s-17.021-2.177-27.939,20.544c-10.177,21.177-24.223,41.624-2.261,46.581l3.967-12.347,2.457,13.266a85.931,85.931,0,0,0,9.4.161c23.519-.759,45.917.222,45.2-8.217C562.307,414.382,567.241,395.581,558.746,381.227Z" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_17" data-name="Path 17" d="M513.294,441.288l.558-4.439c-2.491-.5-6.08,1.632-7,4-1.69,4.348-4.82,15.634-7.981,26.705-5.128,17.958-9.364,46.267-9.1,49.372a148.276,148.276,0,0,0,1.6,16.128c1.316,8.02,3.036,6.2.973,8.883a4.893,4.893,0,0,0-.59,5.264s11.2-5.552,17.088,2.283a10.351,10.351,0,0,0,2.406-3.544c.857-2.159,3.009-3.8,1.364-5.957s4.037-6.4,1.782-10.789-2.858-4.133-1.227-6.985,4.684-20.363,4.684-20.363Z" transform="translate(-54.852 -112.992)" fill="#d0cde1" />
                    <path id="Path_19" data-name="Path 19" d="M556.132,540.964s-31.592,10.221-50.64,6.5c0,0,5.575-17.654-14.4-25.552l45.065-5.575" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Horse_Front_Hair" data-name="Horse Front Hair" d="M508,477.12l-21.151-7.271,15.947-2.278a126.482,126.482,0,0,0-21.1-27.162l-38.848,4.44,29.325-12.568c-62.969-47.366-148.826,5.068-148.826,5.068l206,107C524.226,516.875,516.885,494.781,508,477.12Z" transform="translate(-54.852 -112.992)" fill="#6c63ff" />
                    <path id="Horse_Tail" data-name="Horse Tail" d="M741.98,542.669s46.693-34.073,95.911,12.62,88.339,0,88.339,0l31.549,35.335L943.9,605.768l23.978-3.786,23.978,31.549s-104.744,55.527-170.367-37.86-155.224-5.048-155.224-5.048Z" transform="translate(-54.852 -112.992)" fill="#6c63ff" />
                    <path id="Path_34" data-name="Path 34" d="M536.155,516.341l-1.858-9.756,4.646-9.292,48.782,10.221L607.7,544.681s-25.088-11.615-28.8,13.938l-22.765-17.654" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_35" data-name="Path 35" d="M648.585,648.284s-16.26-4.181-19.977,2.323-2.788,27.875-2.788,28.34,5.575,5.11,7.433,5.11,13.473,20.906,29.269,13.473S648.585,648.284,648.585,648.284Z" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_37" data-name="Path 37" d="M595.158,516.341c-3.164,0-11.22-1.31-20.251-3-7.814-1.459-16.367-3.192-23.113-4.595-7.224-1.505-12.386-2.63-12.386-2.63s-1.858,11.615-7.9,10.221c-5.2-1.2-20.753-55.513-24.958-70.524a5.222,5.222,0,0,1,2.309-5.868l21.357-13.041L535.691,429s9.245-7.145,14.611-7.289,14.658-1.538,14.658-1.538S575.645,421.1,577.5,429s2.788,57.144,9.756,65.971S603.985,516.341,595.158,516.341Z" transform="translate(-54.852 -112.992)" fill="#d0cde1" />
                    <path id="Path_39" data-name="Path 39" d="M583.078,493.576s-4.548,10.853-8.172,19.768c-7.814-1.459-16.367-3.192-23.113-4.595a13.3,13.3,0,0,1,2.016-3.559c3.252-3.717,1.394-4.646,1.394-4.646-2.788-5.575-.465-13.008-.465-13.008-5.575-14.867,2.788-33.45,2.788-33.45Z" transform="translate(-54.852 -112.992)" opacity="0.15" />
                    <g id="Girl_Face" data-name="Girl Face">
                    <circle id="Ellipse_6" data-name="Ellipse 6" cx="18.119" cy="18.119" r="18.119" transform="translate(458.538 270.942)" fill="#ffb8b8" />
                    <path id="Path_36" data-name="Path 36" d="M546.376,405.77s3.717,19.513,6.969,22.3-24.623,6.969-24.623,6.969,4.181-13.473-.929-20.442S546.376,405.77,546.376,405.77Z" transform="translate(-54.852 -112.992)" fill="#ffb8b8" />
                    <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="2.555" cy="4.878" rx="2.555" ry="4.878" transform="translate(491.756 281.214)" fill="#ffb8b8" />
                    </g>
                    <g id="Girl_Front_Hair" data-name="Girl Front Hair">
                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="12.63" cy="12.63" r="12.63" transform="translate(467.106 240.067)" fill="#2f2e41" />
                    <path id="Path_41" data-name="Path 41" d="M520.629,362.365a12.63,12.63,0,0,1,11.3-12.559,12.765,12.765,0,0,0-1.328-.071,12.63,12.63,0,1,0,0,25.259,12.761,12.761,0,0,0,1.329-.071A12.63,12.63,0,0,1,520.629,362.365Z" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_42" data-name="Path 42" d="M499.99,266.8l-17.256-9.039-23.831,3.7-4.93,21.777,12.273-.472,3.429-8v7.869l5.663-.218,3.287-12.737,2.054,13.559,20.133-.411Z" fill="#2f2e41" />
                    </g>
                    <g id="Horse_Body" data-name="Horse Body">
                    <path id="Path_23" data-name="Path 23" d="M455.908,766.786l-12.556,18.563s32,3,32-3a43,43,0,0,1,2.246-12.341Z" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_24" data-name="Path 24" d="M645.5,565.357l-67,52-11,36,22-6,22.5-34.5,71.5-38.5Z" fill="#3f3d56" />
                    <path id="Path_25" data-name="Path 25" d="M622.352,766.349s-3,20,3,20,25-20,25-20l-3.5-8.5Z" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_26" data-name="Path 26" d="M409.352,633.349l-56,36-19,83,18-6s2-77,36-78,84-2,89-31S409.352,633.349,409.352,633.349Z" transform="translate(-54.852 -112.992)" fill="#3f3d56" />
                    <path id="Path_27" data-name="Path 27" d="M338.352,745.349l-4,7,2,18s26-10,24-18-8-7-8-7Z" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_28" data-name="Path 28" d="M641.352,629.349s13,47,97,61c0,0,49.5-.5,40.5,38.5s-10.5,42.5-10.5,42.5l21,4,7.5-91.5-50.5-63.5Z" transform="translate(-54.852 -112.992)" fill="#3f3d56" />
                    <path id="Path_29" data-name="Path 29" d="M769.852,766.849s-14.5,15.5-11.5,17.5,29,5,31-1,0-16,0-16Z" transform="translate(-54.852 -112.992)" fill="#2f2e41" />
                    <path id="Path_30" data-name="Path 30" d="M692.762,661.3a71.542,71.542,0,0,1-42.94-14.23c-12.36,5.29-26.68,11.12-42.78,17.21-2.42.91-4.87,1.83-7.37,2.76q-12.09,4.47-25.39,9.06c-2.91,1-5.86,2.01-8.85,3.01q-17.4,5.835-36.59,11.62-4.545,1.365-9.2,2.71c-.76.23-1.52.45-2.29.67-85.04,24.56-121.96-60.5-135.15-104.81-.34-1.16-.68-2.3-.99-3.44a105.739,105.739,0,0,1-3.53-33.52c1.29-27.59-11.77-55.1-11.77-55.1a401.306,401.306,0,0,1-15.15,69.41c-11.35,35.33-50.48,16.4-44.17,0s-6.31-51.74-6.31-51.74c-21.45-64.36,13.89-73.2,13.89-73.2,111.88-58.96,210.02,88.57,218.93,102.45l125.33-18.02a71.94,71.94,0,1,1,34.33,135.16Z" transform="translate(-54.852 -112.992)" fill="#3f3d56" />
                    <path id="Path_31" data-name="Path 31" d="M263.1,341.339l-5.048-41.646,21.453,30.288Z" fill="#3f3d56" />
                    <path id="Path_32" data-name="Path 32" d="M252.1,344.339l-5.048-41.646,21.453,30.288Z" fill="#3f3d56" />
                    <path id="Path_43" data-name="Path 43" d="M574.282,676.1c-2.91,1-5.86,2.01-8.85,3.01l-25.58-41.26Z" transform="translate(-54.852 -112.992)" fill="#6c63ff" />
                    <path id="Path_44" data-name="Path 44" d="M607.042,664.279c-2.42.91-4.87,1.83-7.37,2.76l-21.82-35.19Z" transform="translate(-54.852 -112.992)" fill="#6c63ff" />
                    <path id="Path_45" data-name="Path 45" d="M528.842,690.729q-4.545,1.365-9.2,2.71l-25.79-41.59Z" transform="translate(-54.852 -112.992)" fill="#6c63ff" />
                    </g>
                    <path id="Path_40" data-name="Path 40" d="M558.92,454.087s-8.363,18.583-2.788,33.45c0,0-2.323,7.433.465,13.008,0,0,1.858.929-1.394,4.646s-6.04,16.725-3.717,19.513-3.252,7.9-1.858,10.685-2.323,6.5-2.323,6.5,13.938,2.788,16.26,6.969c0,0,2.788-3.252,1.394-6.969s-.465-5.11.929-7.433,5.575-7.433,6.04-9.756,12.544-31.127,12.544-31.127l-5.665-52.492Z" transform="translate(-54.852 -112.992)" fill="#d0cde1" />
                    <path id="Path_38" data-name="Path 38" d="M563.566,544.216s-4.181,21.371-13.008,18.119,0-22.3,0-22.3Z" transform="translate(-54.852 -112.992)" fill="#ffb8b8" />
                </g>
                </svg>
            </div>

            {/* ******************************************************************** */}
            <div className='h2'>
                Adore riding horse...
            </div>

            <div className="video">
                <video ref={videoRef} muted controls>
                    <source src={ridingvideo} type="video/mp4" />
                </video>
                <div className="video_description">
                    Learning to ride and mastering different riding skills can be a fulfilling and confidence-boosting experience
                    <p>
                        Riding horses allows you to be in close contact with nature, especially when 
                    riding through scenic trails or open fields. The sense of freedom and being outdoors can 
                    be incredibly refreshing and fulfilling.
                    </p>
                    <h5>Horses are highly intelligent and sensitive creatures. </h5>
                    <p>
                        Riding horses is a physical activity that engages various muscle groups, improves balance, and enhances coordination. 
                        It can be an enjoyable way to stay active and fit.
                    </p>
                </div>
            </div>

            <div className='h2'>
                ...likewise doing some  little examples for ...
            </div>
           <CodePenEmbed/>
        </div>
    )
}

export default Hobby;