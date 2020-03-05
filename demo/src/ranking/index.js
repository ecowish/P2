import React from 'react';
import PropTypes from "prop-types";
import $ from 'jquery';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import './ranking.css';

import demoRanking from '../demo/ranking.json';

export function renderRanking(ranking, category, firstOnTop) {
    var rank = 1;

    return <ul class={"ranking_wrap" + ((firstOnTop)?" firstOnTop":"")}>
            {
                ranking.map((item) => {
                    var obj = (category)?item:item.ranking[0];
                    return <li>
                        <div class="ranking_item">
                        <div class="ranking_image_wrap">
                            <div class="ranking_image">
                                <img src={obj.image} alt="" />
                            </div>
                        </div>
                        <div class="ranking_description">
                            <Link to={(category)?"#":"/ranking/"+item.path}>
                                <h3>{(category)?(rank++)+"위":item.caption+" 분야"}</h3>
                                <p>{obj.name}</p>
                            </Link>
                        </div>
                        </div>
                    </li>
                })
            }
        </ul>;
}

class Ranking extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }
    render() {
        var category = null, ranking_orig = [];
        if (this.props.match && this.props.match.params.category) {
            category = this.props.match.params.category;
            ranking_orig = demoRanking[category].ranking;
        } else {
            for(var cat in demoRanking) {
                var item = demoRanking[cat];
                item.path = cat;
                ranking_orig.push(item);
            }
        }
        
        return <section>
            <h1>편리한 에코 분야별 순위</h1>
            <h2>{(category)?demoRanking[category].caption + " 분야":"분야별 1위"}</h2>
            {
                renderRanking(ranking_orig, category, category)
            }
        </section>;
    }
}

export default withRouter(Ranking);