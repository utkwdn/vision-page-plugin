import React from 'react';
import { createRoot } from 'react-dom/client';
import { useInView } from 'react-intersection-observer';
import YoutubeSwitcher from './youtubeSwitcher.js';
import videoThumbnail from './images/video-1080p-thumb-03.jpg';

export default function View() {
	const { ref: torchCamo01ref, inView: torchCamo01IsVisible } = useInView();
	const { ref: torchCamo02ref, inView: torchCamo02IsVisible } = useInView();
	const { ref: torchCamo03ref, inView: torchCamo03IsVisible } = useInView();
	const { ref: stepsSlideref, inView: stepsSlideIsVisible } = useInView();
	const { ref: objTitleL01ref, inView: objTitleL01IsVisible } = useInView();
	const { ref: objTitleL02ref, inView: objTitleL02IsVisible } = useInView();
	const { ref: objTitleL03ref, inView: objTitleL03IsVisible } = useInView();
	const { ref: objTitleR01ref, inView: objTitleR01IsVisible } = useInView();
	const { ref: objTitleR02ref, inView: objTitleR02IsVisible } = useInView();

	return (
		<>
			<section className="hero">
				<div className="titleBlock">
					<div className="angleBracketDown bracketHeroAdjustment" />
					<h1 className="textUppercase">
						<span className="fake-big-head">
							Strategic
							<br />
							Vision
						</span>
						<br />
						<span className="itav">It takes a Volunteer</span>
					</h1>

					<div className="triangleContainer">
						<div className="flagshipTorch"></div>
						<div className="triangle-bottomright"></div>
					</div>
				</div>
				<section className="vision">
					<h2 className="nod">Our Vision</h2>
					<p className="lead">
						A world enriched by our{ ' ' }
						<span className="textPop">ideas</span>, improved through
						our <span className="textPop">action</span>, and
						inspired by the{ ' ' }
						<span className="textPop">Volunteer spirit</span> of
						service and leadership
					</p>
					<a
						href="/wp-content/plugins/vision-page-plugin/build/strategic-vision-2021.pdf"
						className="visionLink"
					>
						<span>Read the full Strategic Vision document</span>
						<span className="downloadIcon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-file-earmark-arrow-down-fill"
								viewBox="0 0 16 16"
							>
								<path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
							</svg>
						</span>
					</a>

					<div className="videoContainer">
						<div className="container-fluid py-xl-5">
							<div className="row justify-content-center strip-row">
								<div className="col-12 col-sm-12 col-md-12 col-xl-12 align-self-start align-self-md-center item">
									<div className="ratio ratio-16x9 yt-container max-width-1386">
										<YoutubeSwitcher
											figureClasses="video-interaction"
											imgAttributes={ {
												src: videoThumbnail,
												width: '1380',
												height: '780',
												alt: 'play video',
											} }
											youtubeId="I3H4Po3dFwc"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						ref={ stepsSlideref }
						className="angleContainer stepsSlide"
					>
						<p className="angleIntro">
							We know how much is possible when we unite our
							individual talents and aspirations, put compassion
							front and center, and
						</p>

						<p
							className={ `textSteps textUppercase stepsSlide ${
								stepsSlideIsVisible ? 'stepsAnimate' : ''
							}` }
						>
							<span className="angleCallout"></span>step forward
							<br />
							together as <br /> Volunteers.
						</p>
					</div>
				</section>
				<section className="mission">
					<h2 className="nod missionHeader">Our Mission</h2>
					<div className="missionCore">
						<p className="lead">
							We are a diverse community with a shared commitment
							to discovery, creativity, learning, and engagement.
						</p>
					</div>
					<div className="missionBlock">
						<ul className="missionList">
							<p className="cardIntro">At UT Knoxville we:</p>
							<li>
								<span className="textPopLight">Empower</span>{ ' ' }
								learners of all ages and backgrounds to achieve
								their dreams through accessible and affordable
								education and state-of-the-art research training
								opportunities
							</li>
							<li>
								<span className="textPopLight">Advance</span>{ ' ' }
								the prosperity, well-being, and vitality of
								communities across Tennessee and around the
								world through our research, teaching, service,
								and engagement
							</li>
							<li>
								<span className="textPopLight">Commit</span> to
								excellence, equity, and inclusion within the
								university, across the state, and in all our
								global activities
							</li>
						</ul>
					</div>
				</section>
			</section>

			<div className="skinnyLongImg"></div>

			<section className="goalsContainer">
				<h2 className="nod">
					<span className="printLineHeader"></span>
					<span className="bringForward">
						Our Goals and Objectives
					</span>
				</h2>

				<div className="goalsArticleContainer">
					<article className="goalsObj">
						<div className="objLeft">
							<h3
								ref={ objTitleL01ref }
								className={ `textUppercase objTitleL01 ${
									objTitleL01IsVisible
										? 'objTitleAnimate'
										: ''
								}` }
							>
								Cultivating the{ ' ' }
								<span className="boldPunch">
									Volunteer Experience
								</span>
							</h3>
							<div
								ref={ torchCamo01ref }
								className="printLineComplex camo01Container"
							>
								<div
									className={ `printLinePattern torchCamo01 ${
										torchCamo01IsVisible
											? 'torchCamoAnimate'
											: ''
									}` }
								></div>
							</div>
							<p className="lead offset">
								Demonstrate leadership in providing high-quality
								educational opportunities for people at every
								stage of life, whenever and wherever they seek
								to learn
							</p>
							<ul className="ObjList">
								<li>
									<span className="textPopLight">
										Provide
									</span>{ ' ' }
									learners at all levels with opportunities to
									engage in rich learning and in scholarship
									that is collaborative, inquiry-based,
									experiential, affordable, and relevant
								</li>
								<li>
									<span className="textPopLight">
										Deliver
									</span>{ ' ' }
									educational opportunities that are
									responsive to the needs of learners
								</li>
								<li>
									<span className="textPopLight">
										Support
									</span>{ ' ' }
									curricular innovations that align with
									21st-century workforce needs and our
									research strengths and priorities
								</li>
								<li>
									<span className="textPopLight">Ensure</span>{ ' ' }
									that the programs we offer are accessible to
									communities across Tennessee and beyond
								</li>
							</ul>
						</div>
					</article>

					<article className="goalsObj greyBkg">
						<div className="objRight">
							<h3 className="textUppercase printLineLeft objTitleContainerR01">
								<span
									ref={ objTitleR01ref }
									className={ `objTitleR01 ${
										objTitleR01IsVisible
											? 'objTitleAnimateRight'
											: ''
									}` }
								>
									Conducting Research{ ' ' }
									<span className="boldPunch">
										That Makes Life and Lives Better
									</span>
								</span>
							</h3>
							<p className="lead offset">
								Advance the frontiers of knowledge to create a
								more just, prosperous, and sustainable future
								through world-class research, scholarship, and
								creative work
							</p>
							<ul className="ObjList">
								<li>
									<span className="textPopLight">
										Strengthen
									</span>{ ' ' }
									the impact and reputation of our research,
									scholarship, and creative activities
								</li>
								<li>
									<span className="textPopLight">Ensure</span>{ ' ' }
									that the research outcomes we generate lead
									to the creation of a more just, prosperous,
									and sustainable future
								</li>
								<li>
									<span className="textPopLight">Invest</span>{ ' ' }
									in state-of-the-art research infrastructure
									and frameworks to ensure that our
									researchers, scholars, and creatives
									continue to work at the knowledge frontier
								</li>
							</ul>
						</div>
					</article>

					<article className="goalsObj">
						<div className="objLeft">
							<h3
								ref={ objTitleL02ref }
								className={ `textUppercase objTitleL02 ${
									objTitleL02IsVisible
										? 'objTitleAnimate'
										: ''
								}` }
							>
								Ensuring a Culture Where{ ' ' }
								<span className="boldPunch">Vol is a Verb</span>
							</h3>
							<div
								ref={ torchCamo02ref }
								className="printLineComplex camo02Container"
							>
								<div
									className={ `printLinePattern torchCamo02 ${
										torchCamo02IsVisible
											? 'torchCamoAnimate'
											: ''
									}` }
								></div>
							</div>
							<p className="lead offset">
								Develop and sustain a nurturing university
								culture where diversity and community are
								enduring sources of strength
							</p>
							<ul className="ObjList">
								<li>
									<span className="textPopLight">
										Implement
									</span>{ ' ' }
									structures and practices that attract and
									retain a diverse community of faculty,
									staff, and students and that support a
									culture where everyone matters and belongs
								</li>
								<li>
									<span className="textPopLight">
										Challenge
									</span>{ ' ' }
									students to examine their understandings of
									the world and their capacity to act as
									members of an inclusive community
								</li>
								<li>
									<span className="textPopLight">
										Nurture
									</span>{ ' ' }
									change that supports inclusive behaviors and
									a culture of respectful dialogue to create
									greater understanding of difference,
									starting with our administration, faculty,
									and staff
								</li>
							</ul>
						</div>
					</article>

					<article className="goalsObj greyBkg">
						<div className="objRight">
							<h3 className="textUppercase objTitleContainerR01 printLineLeft">
								<span
									ref={ objTitleR02ref }
									className={ `objTitleR02 ${
										objTitleR02IsVisible
											? 'objTitleAnimateRight'
											: ''
									}` }
								>
									Making Ourselves{ ' ' }
									<span className="boldPunch">
										Nimble and Adaptable
									</span>
								</span>
							</h3>
							<p className="lead offset">
								Empower and sustain a culture of collaboration,
								adaptability, and innovation
							</p>
							<ul className="ObjList">
								<li>
									<span className="textPopLight">
										Enhance
									</span>{ ' ' }
									a campus-wide culture of innovation and
									collaboration at all levels
								</li>
								<li>
									<span className="textPopLight">Adapt</span>{ ' ' }
									current structures and systems to foster
									identity and collaboration while supporting
									innovation
								</li>
								<li>
									<span className="textPopLight">Foster</span>{ ' ' }
									organizational agility and innovation by
									developing incentives for innovative and
									transformational work that also breaks or
									blurs the lines of organizational silos
								</li>
							</ul>
						</div>
					</article>

					<article className="goalsObj">
						<div className="objLeft">
							<h3
								ref={ objTitleL03ref }
								className={ `textUppercase objTitleL03 ${
									objTitleL03IsVisible
										? 'objTitleAnimate'
										: ''
								}` }
							>
								Embodying the Modern R1,{ ' ' }
								<span className="boldPunch">
									Land-Grant University
								</span>
							</h3>
							<div
								ref={ torchCamo03ref }
								className="printLineComplex camo03Container"
							>
								<div
									className={ `printLinePattern torchCamo03 ${
										torchCamo03IsVisible
											? 'torchCamoAnimate'
											: ''
									}` }
								></div>
							</div>
							<p className="lead offset">
								Connect with every Tennessean and with
								communities around the world, inspiring future
								Volunteers to join our diverse community
							</p>
							<ul className="ObjList">
								<li>
									<span className="textPopLight">Deepen</span>{ ' ' }
									and extend the university’s ability to
									connect with Tennesseans
								</li>
								<li>
									<span className="textPopLight">
										Establish
									</span>
									, build upon, and streamline processes to
									identify community needs and activate
									university resources to meet those needs
								</li>
							</ul>
						</div>
					</article>
				</div>
			</section>

			<section className="explore">
				<div className="angleContainer02">
					<div className="angleOutro">
						<p>
							We examined the changing landscape of higher
							education and analyzed the university’s prospects
							for the future.
						</p>
						<p>
							<a
								href="https://chancellor.utk.edu/vision/envisioning-the-future-of-ut-knoxville/"
								className="exploreLink"
							>
								<span aria-hidden="true">
									Explore Our Vision Process
								</span>{ ' ' }
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="#ff8200"
										viewBox="0 0 24 24"
									>
										<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
									</svg>
								</span>
							</a>
						</p>
					</div>
				</div>
			</section>
			{ /* <div className="skinnyLongImg visionFooter"></div> */ }
		</>
	);
}

document.addEventListener( 'DOMContentLoaded', () => {
	const container = document.getElementById( 'vision-page' );
	if ( container ) {
		const root = createRoot( container );
		root.render( <View /> );
	}
} );
