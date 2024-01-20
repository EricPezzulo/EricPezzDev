import nodemailer from 'nodemailer';
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: GOOGLE_EMAIL,
		pass: GOOGLE_EMAIL_PASSWORD
	}
});

transporter.verify(function (error) {
	if (error) {
		console.error(error);
		console.log('❌ Nodemailer failed to connect to server!');
	} else {
		console.log('📧 Server is ready to recieve emails!');
	}
});

export default transporter;
