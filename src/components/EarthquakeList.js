import React, { Component } from "react";
import moment from "moment";
import earthquakes from "../data/earthquakes";
const earthArray = earthquakes.features;

export default class EarthquakeList extends Component {
	render() {
		return (
			<div className="quake-list">
				<div className="row">
					{earthArray.map((eq, ind, arr) => {
						return (
							<div className="col-sm-6" key={eq.id}>
								<div className="card">
									<div className="card-block">
										<h4 className="card-title">{eq.properties.place}</h4>
										<h6 className="card-subtitle mb-2 text-muted">
											Magnitude: {eq.properties.mag}
										</h6>
										<h6 className="card-subtitle mb-2 text-muted">
											Time: {moment(eq.properties.time).format("llll")}
										</h6>
										<p className="card-text">
											Coordinates: {eq.geometry.coordinates}
										</p>
										<a href={eq.properties.url} className="card-link">
											USGS Event Link
										</a>
									</div>
								</div>
							</div>
						);
					})};
				</div>
			</div>
		);
	}
}
