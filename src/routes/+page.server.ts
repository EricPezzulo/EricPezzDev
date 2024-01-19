import { GOOGLE_EMAIL, PERSONAL_EMAIL } from '$env/static/private';
import transporter from './emailSetup.server.js';

interface messageProps {
	from: string;
	to: string[];
	subject: string;
	text: string;
	html: string;
}

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const email = formData.get('email');
			// const subject = formData.get('subject');
			const body = formData.get('body');

			// Ensure 'email' and 'body' are strings before using them
			if (typeof email !== 'string' || typeof body !== 'string') {
				throw new Error('Invalid form data');
			}
			const html = `
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
			</head>

			<body>
				<p style="font-family: 'Inter', sans-serif; font-weight:">${body}</p>
				<p>name: ${name} </p>
				<p>email: ${email} </p>
			</body>
			`;

			const message: messageProps = {
				from: email,
				to: [GOOGLE_EMAIL, PERSONAL_EMAIL],
				subject: 'EricPezz.dev',
				text: body,
				html: html
			};

			const sendEmail = async (message: messageProps) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (error, info) => {
						if (error) {
							console.error(error);
							reject(error);
						} else {
							resolve(info);
						}
					});
				});
			};
			await sendEmail(message);

			return {
				success: 'Email is sent'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
