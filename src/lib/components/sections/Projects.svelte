<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	let BAS_Image_1 =
		'https://erics-personal-bucket.s3.us-east-1.amazonaws.com/New%20Products%20screen%20w%20sidebar.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLWVhc3QtMSJIMEYCIQDO4EY1dNgcPExHCAQZF4TfcLoPQjs8%2BGJjOZKQiQ%2BRLwIhAKYIU5WfcAVIOzr2b1bYamUvoZOtOG4EPmAvu8D%2BsAHxKqICCPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTgzNTcwOTAzNzQwIgwkCTmBtr7W8Q6qvLAq9gEpfhyZcE4hNc780m6dET0M79UMHZ0u8Twt8BUndHO%2BeJRQ6gPoi0Oai6f5uylNnRxmWNiV2dxMqI73r3I3ERWywODjZ3z8q3KsJ1yExOySOMSiFdZlgRLbrK1ltPCyF7NmCu5TmTxLKwHInYi64zi3AcnX5QPtwNkq1f06jPZudPCuycD0jD37oVO1mZSxV1VvjiBqZbK%2FEVdJqr5ABvm7PnGC9Cd2hIiEWRt5ie16Ld2AbAZ%2F9b8ggVXhyQILnZEA7lKubEOA29jyH1NQt%2FMH1IM4bbtmWJg1YwFUWNVMMHFcu5ZKj71H4E5SAlCnna38Lq4XNlgwzburrQY63gFl%2FAkMIdVGBl5Gn%2BjxMOAfnOg14OZQkUDbyYINzeSNp7sOcOECBDVOf3Ru8IrqC39pYxTJ7Gxo73gVza3liH3ulg5pSaz6zIpkCm00jG%2FdlzuZmHP6FEbktjxRBNrL7cGx6AfNtKlAu2%2BDvYVWaNV1OHZvofT2xCCxdIP6VU8XcLJ%2F04cbsws2xTF6Bu03%2Byi51WkfEymNuyZgzWinnwjlKnayOXxcKuDuN9T%2Fbfv5dcUGTEtDPOIiDAS3aNd3KuDkf70h%2FCVGXuWIhNwLmHw6MVeRSU7MRotjU%2BuxiOY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T215249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYPX4JKK6INHTQCW2%2F20240119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b0c2d928a9b61d171bd02db7580d6c62db16c0b752d629d74cbea65ba4fa26b8';

	let LostVillage_Image_1 =
		'https://erics-personal-bucket.s3.us-east-1.amazonaws.com/Frame%201LostVillagethumbnail.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLWVhc3QtMSJIMEYCIQDO4EY1dNgcPExHCAQZF4TfcLoPQjs8%2BGJjOZKQiQ%2BRLwIhAKYIU5WfcAVIOzr2b1bYamUvoZOtOG4EPmAvu8D%2BsAHxKqICCPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTgzNTcwOTAzNzQwIgwkCTmBtr7W8Q6qvLAq9gEpfhyZcE4hNc780m6dET0M79UMHZ0u8Twt8BUndHO%2BeJRQ6gPoi0Oai6f5uylNnRxmWNiV2dxMqI73r3I3ERWywODjZ3z8q3KsJ1yExOySOMSiFdZlgRLbrK1ltPCyF7NmCu5TmTxLKwHInYi64zi3AcnX5QPtwNkq1f06jPZudPCuycD0jD37oVO1mZSxV1VvjiBqZbK%2FEVdJqr5ABvm7PnGC9Cd2hIiEWRt5ie16Ld2AbAZ%2F9b8ggVXhyQILnZEA7lKubEOA29jyH1NQt%2FMH1IM4bbtmWJg1YwFUWNVMMHFcu5ZKj71H4E5SAlCnna38Lq4XNlgwzburrQY63gFl%2FAkMIdVGBl5Gn%2BjxMOAfnOg14OZQkUDbyYINzeSNp7sOcOECBDVOf3Ru8IrqC39pYxTJ7Gxo73gVza3liH3ulg5pSaz6zIpkCm00jG%2FdlzuZmHP6FEbktjxRBNrL7cGx6AfNtKlAu2%2BDvYVWaNV1OHZvofT2xCCxdIP6VU8XcLJ%2F04cbsws2xTF6Bu03%2Byi51WkfEymNuyZgzWinnwjlKnayOXxcKuDuN9T%2Fbfv5dcUGTEtDPOIiDAS3aNd3KuDkf70h%2FCVGXuWIhNwLmHw6MVeRSU7MRotjU%2BuxiOY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T215812Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYPX4JKK6INHTQCW2%2F20240119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4e37ff68483c57af1bac388a2c74820a3ef97fe9851a2905b47e72be59146f51';
</script>

<section>
	<div class="p-5">
		<h3 class="font-Inter font-semibold text-slate-300">PROJECTS</h3>
		<ProjectCard
			title="BAS ERP"
			status="In production"
			description="An internal ERP system created to automate business processes, enhance workflows, and manage product."
			images={[BAS_Image_1]}
			techStack={[
				'JavaScript',
				'TypeScript',
				'Next.js',
				'React.js',
				'Node.js',
				'GCE',
				'REST',
				'MongoDB',
				'Prisma',
				'Auth.js',
				'Shopify',
				'AWS Lambda',
				'AWS S3',
				'Vercel'
			]}
		/>
		<ProjectCard
			title="LostVillage"
			status="In development"
			description="An ecommerce store built on Next.js, inspired from designed by Nike and Adidas."
			images={[LostVillage_Image_1]}
			techStack={[
				'JavaScript',
				'TypeScript',
				'Next.js',
				'React.js',
				'Node.js',
				'PostgreSQL',
				'GraphQL',
				'Prisma',
				'Auth.js',
				'AWS S3',
				'Vercel'
			]}
		/>
		<ProjectCard
			title="CoachSpot"
			status="In development"
			description="CoachSpot is a Saas that was created to revolutionize the way people give and receive online health and wellness, and fitness training. Expected release Q4 2024."
			techStack={[
				'JavaScript',
				'TypeScript',
				'Next.js',
				'React.js',
				'Node.js',
				'GCE',
				'MongoDB',
				'Prisma',
				'Auth.js',
				'Shopify',
				'AWS Lambda',
				'AWS S3',
				'Vercel'
			]}
		/>
	</div>
</section>
