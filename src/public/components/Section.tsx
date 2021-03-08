import * as React from 'react';
import Context from '../utils/Context';
import '../styles/Section.scss'

const Section: React.FC = () => {

    const {state, dispatch} = React.useContext(Context);

    React.useEffect(()=>{

        window.addEventListener('wheel', handleWheel);

        return function cleanup() {
            window.removeEventListener('wheel', handleWheel);
        }
    })

    function handleWheel(e: WheelEvent){
        if(e.deltaY>0) {
            if(state.sectionNum<3){
                dispatch({type:'CHANGE_SECTION', sectionNum:state.sectionNum+1});
            }
        }else if(e.deltaY<0){
            if(state.sectionNum>0){
                dispatch({type:'CHANGE_SECTION', sectionNum:state.sectionNum-1});
            }
        }
    }

    const handleClick = () => {
        dispatch({type:'CHANGE_SECTION', sectionNum:1});
    }

    const handleSection = () => {
        switch(state.sectionNum){
            case 0: 
                return (
                    <section className='home'>
                        <div>
                            <h5> YongSeong Jang </h5>
                            <h1> JavaScript Developer </h1>
                        </div>
                    </section>
                );
            case 1:
                return (
                    <section className='introduction'>
                        <div className='wrap'>
                            <h4> 안녕하세요. Node.js와 React를 사용하는 웹 개발자 장용성입니다. </h4>

                            <div className='content'>
                                <div className='detail'>
                                    <h5 className='kor_h5'> 경기대학교 </h5>
                                    <p> 2013.03 ~ 2020.02 </p>
                                    <p> 컴퓨터과학전공 </p>
                                    <p> 전체 학점 3.66/4.5 </p>
                                    <p> 전공 학점 3.92/4.5 </p>
                                </div>

                                <div className='detail'>
                                    <h5 className='eng_h5'> Goorm </h5>
                                    <p> 4학년 2학기 현장실습 </p>
                                    <p className='term'> 2019.08.05 ~ 2019.12.20 </p>
                                    <p className='work'> Admin - Express, React, Mongoose </p>
                                    <p> Goorm IDE - Node.js, JQuery </p>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 2: 
                return (
                    <section className='skills'>
                        <div className='content'>
                            <div className="flip-card first bounce">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg" alt="JavaScript"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className='javascript'>
                                            <h1>JavaScript</h1> 
                                            <p>4/5</p>
                                            <p className='description'>ES5, ES6를 사용한 개발이 가능하며 Hoisting, Closure 등 기본 개념을 확실하게 이해하고 있습니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png" alt="TypeScript"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className='typescript'>
                                            <h1>TypeScript</h1> 
                                            <p>4/5</p>
                                            <p className='description'>Back-end와 Front-end를 TypeScript를 사용해서 개발할 수 있습니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="data:image/png;base64,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" alt="Node.js"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className='node'>
                                            <h1>Node.js</h1> 
                                            <p>4/5</p>
                                            <p className='description'>express를 기반으로 백엔드 개발을 할 수 있습니다. rest api를 설계하고 개발할 수 있으며 jwt를 사용한 사용자 인증을 구현할 수 있습니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className='react'>
                                            <h1>React</h1> 
                                            <p>4/5</p>
                                            <p className='description'>Hook을 사용할 수 있습니다. redux, redux-saga를 사용해서 상태관리를 할 수 있습니다. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                );
            case 3: 
                return (
                    <section className='portfolio'>
                        <div className='content'>
                            <ul>
                                <li>
                                    <h1>웹 기능 개발 <a href='https://github.com/yongseongJang/node-react'><img src='https://img.pngio.com/github-logo-icon-of-glyph-style-available-in-svg-png-eps-ai-github-icon-png-256_256.png' alt='github'></img></a></h1>
                                    <p className='term'>2020.01~</p>
                                    <ul className='skill'>
                                        <li>TypeScript</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Redux-saga</li>
                                        <li>Jest</li>
                                    </ul>
                                    <p>웹 개발 공부로 회원 관련 기능, 인증, 게시판 기능을 구현했습니다.</p>
                                </li>
                                <li>
                                    <h1>현장실습</h1>
                                    <p className='term'>2019.08 ~ 2019.12</p>
                                    <ul className='skill'>
                                        <li>JavaScript</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Redux-saga</li>
                                        <li>Jest</li>
                                        <li>JQuery</li>
                                    </ul>
                                    <p>admin 사이트 대시보드 유지보수와 웹 서비스 유지보수를 했습니다.</p>
                                </li>
                                <li>
                                    <h1>대학교 캡스톤디자인 - 여행 후기 공유 애플리케이션 개발</h1>
                                    <p className='term'>2019.03~2019.06</p>
                                    <ul className='skill'>
                                        <li>JavaScript</li>
                                        <li>Express</li>
                                        <li>MySQL</li>
                                        <li>Android(Java)</li>
                                    </ul>
                                    <p>팀원 4명 중 백엔드 담당했으며, rest api를 설계하고 구현했습니다.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                );
        }
    }

    return (
        <React.Fragment>
            {handleSection()}
            <div className='count'>
            {state.sectionNum==0? 
                <div onClick={handleClick}><span className='indication'></span><p>scroll</p></div>:<div className='number'>{state.sectionNum+1}</div>
            }
            </div>
        </React.Fragment>
    )
};

export default Section;