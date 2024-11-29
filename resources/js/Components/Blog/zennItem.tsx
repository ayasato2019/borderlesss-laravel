export const getStaticProps = async () => {
	try {
		const res = await fetch('https://zenn.dev/api/articles?username=aya_sato&order=latest');
		const data = await res.json();

		return {
			props: {
				articles: data.articles.slice(0, 10),
			},
			revalidate: 60, // 再生成間隔（秒）
		};
	} catch (error) {
		console.error('データ取得エラー:', error);
		return { props: { articles: [] } };
	}
};
