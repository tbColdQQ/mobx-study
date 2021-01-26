import { inject, observer } from 'mobx-react';
import React from 'react'
import appleImg from './images/apple.png'

@inject('apple')
@observer
class App extends React.Component {

  render () {
    const { pick, eating, leftApples, eatedApples, btnDisabled } = this.props.apple
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {leftApples.length}个苹果，{
                leftApples.reduce((total, item) => total + item.weight, 0)
              }克
            </div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">
              {eatedApples.length}个苹果，{
                eatedApples.reduce((total, item) => total + item.weight, 0)
              }克
            </div>
          </div>
        </div>

        <div className="appleList">
          {
            leftApples.map(item => (
              <div className="appleItem" key={item.id}>
                <div className="apple">
                  <img src={appleImg} alt="" />
                </div>
                <div className="info">
                  <div className="name">红苹果 - {item.id}号</div>
                  <div className="weight">{item.weight}克</div>
                </div>
                <div className="btn-div">
                  <button onClick={() => eating(item.id)}> 吃掉 </button>
                </div>
              </div>
            ))
          }
        </div>

        <div className="btn-div">
          <button className={btnDisabled ? 'disabled' : ''} onClick={() => pick()}>{btnDisabled ? '正在采摘' : '摘苹果'}</button>
        </div>
      </div>
    )
  }
}

export default App;
