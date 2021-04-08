import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://i.postimg.cc/WzXJBX1c/image.jpg" profileSrc='https://i.postimg.cc/CL4pGbnp/Kakao-Talk-20210407-003948781.jpg' title='Seonae'/>
            <Story image="https://i.postimg.cc/jSJLcsPb/image.jpg" profileSrc='https://cdn.9oodnews.com/news/photo/202012/1436_1316_5915.jpg' title='Miyeon'/>
            <Story image="https://i.postimg.cc/Bv0QC2JT/image.jpg" profileSrc='https://pds.joins.com/news/component/htmlphoto_mmdata/201910/01/htm_20191001205346742941.jpg' title='Seongwu'/>
            <Story image="https://i.postimg.cc/DZfGB97P/image.jpg" profileSrc='https://i.ytimg.com/vi/Yzf3YfMHVZI/maxresdefault.jpg' title='Sejin'/>
            <Story image="https://i.postimg.cc/3NvxB10Z/image.jpg" profileSrc='https://t1.daumcdn.net/cfile/tistory/99ADAB375DBB0E3926' title='Shunwoo'/>
        </div>
    )
}

export default StoryReel
