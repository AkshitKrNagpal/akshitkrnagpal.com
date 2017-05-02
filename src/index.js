import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ProfileImage extends React.Component {
	render() {
		return (
			<div id="profile-image" className="row">
                <img src={this.props.profileImage} alt={this.props.name.firstname+' '+this.props.name.lastname} />
            </div>
		);
	}
}

class FullName extends React.Component {
	render() {
		return (
			<div id="full-name" className="row">
                <h1>{this.props.name.firstname} <span className="grey">{this.props.name.lastname}</span></h1>
            </div>
		);
	}
}

class Title extends React.Component {
	render() {
		var titlesHtml = []
		var titles = this.props.titles
		titlesHtml.push(titles[0])
		for( var i=1 ; i < titles.length ; i++) {
			titlesHtml.push(' ')
			titlesHtml.push(<span className="grey">&#9679;</span>)
			titlesHtml.push(' ')
			titlesHtml.push(titles[i])
		}
		return (
			<div id="title" className="row">
                <h3>{titlesHtml}</h3>
            </div>
		);
	}
}

class Scholastic extends React.Component {
	render() {
		return (
			<div id="scholastic" className="row">
                <h4>{this.props.scholastic.title} at <a href={this.props.scholastic.link} className="grey">{this.props.scholastic.place}</a></h4>
            </div>
		);
	}
}

class Email extends React.Component {
	render() {
		return (
			<div id="email" className="row">
                <h4><a href={"mailto:" + this.props.email} className="grey">{this.props.email}</a></h4>
            </div>
		);
	}
}

class SocialLink extends React.Component {
	render() {
		return (
			<li>
		        <a href={this.props.link} target="_blank">
		        	<div className="img-container">
		                <img src={this.props.icon} />
		            </div>
		        </a>
		    </li>
		);

	}
}

class SocialLinks extends React.Component {
	render() {
		var socialLinksHtml = [];
		this.props.socialLinks.forEach( function(socialLink) {
			socialLinksHtml.push(<SocialLink link={socialLink.link} icon={socialLink.icon} />)
        })
		return (
			<div id="social-links" className="row">
                <ul>
                	{socialLinksHtml}
                </ul>
            </div>
		);
	}
}

class ResumeButton extends React.Component {
	render() {
		return (
			<div id="resume-link" className="row">
                <span className="btn"><a className="grey no-decor" href={this.props.resumeLink}>See Resume</a></span>
            </div>

		);
	}
}

class ProfileContainer extends React.Component {
	render() {
		var profile = this.props.profile;
		return (
			<div>
				<ProfileImage profileImage={profile.profileImage} name={profile.name} />
				<FullName name={profile.name}/>
				<Title titles={profile.titles} />
				<Scholastic scholastic={profile.scholastic} />
				<Email email={profile.email} />
				<SocialLinks socialLinks={profile.socialLinks} />
				<ResumeButton resumeLink={profile.resumeLink} />
			</div>
		);
	}
}

var profile = {
	profileImage : 'images/profile-image.png',
	name : {
		firstname : 'Akshit',
		lastname  : 'Kr Nagpal'
	},
	titles : [
		'Programmer',
		'Coder',
		'Developer'
	],
	socialLinks : [
		{ link : 'https://www.facebook.com/akshitkrnagpal' , icon : 'images/social-icons/facebook.png'},
		{ link : 'https://github.com/AkshitKrNagpal' , icon : 'images/social-icons/github.png'},
		{ link : 'https://www.linkedin.com/in/akshit-kr-nagpal-40187110a' , icon : 'images/social-icons/linkedin.png'}
	],
	scholastic : {
		title : 'Research Scholar',
		place : 'Cluster Innovation Centre',
		link  : 'https://ducic.ac.in/'
	},
	email : 'akshitkrnagpal@gmail.com',
	resumeLink : 'resume.pdf'

}

ReactDOM.render(
  <ProfileContainer profile ={profile} />,
  document.getElementById('container')
);