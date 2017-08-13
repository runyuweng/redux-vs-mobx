import React from 'react';
import './Intro.css';
import reduxImg from '../static/redux.png';

const Intro = () => <div className="redux-intro">
  <pre>
  {`# 留言板demo

  ## 文件划分：

  |
  |-Index（Redux Demo首页，也就是当前页面）
  |
  |-List（留言板，留言列表页，包含ListItem）
  |
  |-ListItem（留言列表中的每条记录，包含回复）
  

  ## redux store数据结构：

  const data = [{
    name: 'wry',
    id: '0',
    words:'hhh',
    timeStamp: Date.parse(new Date()),
    //留言下的回复
    reply:[{
      name: 'wry',
      id: '0',
      words:'hhh',
      timeStamp: Date.parse(new Date())
    },
    ...
    ]
  },
  ...
  ]
  
  ## 数据流向图
  从下图可以看出redux中的数据流向是单向的`}

  </pre>
  <img src={reduxImg}/>
</div>;

export default Intro;