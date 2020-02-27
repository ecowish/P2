import React from 'react';
import $ from 'jquery';
import './main.css';

class MainPage extends React.Component {
    resize() {
        let $elem = $("#youtube_area .youtube_video iframe");
        $elem.height($elem.width() * 0.5625);
    }

    render() {
        $(this.resize);
        $(window).resize(this.resize).on("orientationchange", this.resize);
        return <section>
            <div id="search_area">
                <h1>찾으시는 것이 있으신가요?</h1>
                <form class="find_dowmain_form">
                    <input type="text" placeholder="재활용 방법을 검색해보세요" />
                    <button type="submit">검색</button>
                </form>
            </div>
            <div id="ranking_area">
                <h1>편리한 에코 분야별 순위</h1>
                <h2>생수 부문</h2>
                <div class="ranking_slide">
                    <button class="ranking_prevbtn"><i class="material-icons">chevron_left</i></button>
                    <ul class="ranking_wrap">
                        <li>
                            <div class="ranking_image">
                            <img alt="" />
                            </div>
                            <div class="ranking_description">
                                <h3>1위</h3>
                                <p>이분이고요</p>
                            </div>
                        </li>
                        <li>
                        <div class="ranking_image">
                            <img alt="" />
                            </div>
                            <div class="ranking_description">
                                <h3>2위</h3>
                                <p>이분이고요</p>
                            </div>
                        </li>
                        <li>
                        <div class="ranking_image">
                            <img alt="" />
                            </div>
                            <div class="ranking_description">
                                <h3>3위</h3>
                                <p>이분이고요</p>
                            </div>
                        </li>
                    </ul>
                    <button class="ranking_nextbtn"><i class="material-icons">chevron_right</i></button>
                </div>
            </div>
            <div id="youtube_area">
                <div class="youtube_description">
                    <h3>어떤 말을 쓰면 좋을까?</h3>
                    <p>그러게 말입니다.</p>
                </div>
                <div class="youtube_video">
                    <iframe src="https://www.youtube.com/embed/1i2BQ1oZAog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    }
}

export default MainPage;