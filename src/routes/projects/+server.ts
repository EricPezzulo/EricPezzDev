import { AWS_IAM_ACCESS_KEY_ID, AWS_IAM_SECRET_ACCESS_KEY } from '$env/static/private';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const data = await request.json();
	const imageName = data.imageNameS3;
	const s3Client = new S3Client({
		region: 'us-east-1',
		credentials: {
			accessKeyId: AWS_IAM_ACCESS_KEY_ID,
			secretAccessKey: AWS_IAM_SECRET_ACCESS_KEY
		}
	});
	const bucketName = 'erics-personal-bucket';
	const objectKey = imageName;
	const expires = 900; // The URL will expire in 60 seconds

	try {
		// Create the command for the GetObject operation
		const getObjectParams = {
			Bucket: bucketName,
			Key: objectKey
		};
		const command = new GetObjectCommand(getObjectParams);

		// Generate the presigned URL
		const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn: expires });

		console.log('🪣 AWS S3 Bucket Connected! /projects');
		return json({
			status: 200,
			body: { url: presignedUrl }
		});
	} catch (err) {
		console.log('❌ AWS S3 Bucket Connected! /projects');
		return json({
			status: 500,
			body: { error: err }
		});
	}
}
