import React from 'react';
import { useForm } from '@inertiajs/react';
import Layout from '../../Layouts/AuthenticatedLayout';

export default function Create() {
    type Data = {
        url: string;
        alt: string;
        imagePng: string;
        imageWebp: string;
        comment: string;
        hearing: boolean;
        design: boolean;
        coding: boolean;
        domain: boolean;
        server_upload: boolean;
        aftercare: boolean;
    };

    const { data, setData, post, processing, errors } = useForm<Data>({
        url: '',
        alt: '',
        imagePng: '',
        imageWebp: '',
        comment: '',
        hearing: false,
        design: false,
        coding: false,
        domain: false,
        server_upload: false,
        aftercare: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('dashboard.works.store'), {
            onError: () => {
                console.error('送信中にエラーが発生しました。');
            },
        });
    };

    return (
        <Layout>
            <form onSubmit={handleSubmit} className="container mx-auto my-10 space-y-4">
                <h1 className="text-2xl mb-4">新規制作実績追加</h1>
                {Object.keys(errors).length > 0 && (
                    <div className="text-red-500">
                        {Object.values(errors).map((error, index) => (
                            <div key={index}>{error}</div>
                        ))}
                    </div>
                )}

                <div>
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
                    <input
                        type="text"
                        id="url"
                        value={data.url}
                        onChange={(e) => setData('url', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>

                <div>
                    <label htmlFor="alt" className="block text-sm font-medium text-gray-700">代替テキスト</label>
                    <input
                        type="text"
                        id="alt"
                        value={data.alt}
                        onChange={(e) => setData('alt', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>

                <div>
                    <label htmlFor="imagePng" className="block text-sm font-medium text-gray-700">PNG画像パス</label>
                    <input
                        type="text"
                        id="imagePng"
                        value={data.imagePng}
                        onChange={(e) => setData('imagePng', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>

                <div>
                    <label htmlFor="imageWebp" className="block text-sm font-medium text-gray-700">WebP画像パス</label>
                    <input
                        type="text"
                        id="imageWebp"
                        value={data.imageWebp}
                        onChange={(e) => setData('imageWebp', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>

                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">コメント</label>
                    <textarea
                        id="comment"
                        value={data.comment}
                        onChange={(e) => setData('comment', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>

                {['hearing', 'design', 'coding', 'domain', 'server_upload', 'aftercare'].map((item) => (
                    <div key={item} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`field-${item}`}
                            checked={data[item as keyof Data] as boolean}
                            onChange={(e) => setData(item as keyof Data, e.target.checked)}
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <label htmlFor={`field-${item}`} className="ml-2 block text-sm text-gray-900">
                            {item}
                        </label>
                    </div>
                ))}

                <button
                    type="submit"
                    disabled={processing}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                >
                    追加
                </button>
            </form>
        </Layout>
    );
}
