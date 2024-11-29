import dayjs from 'dayjs';

type Props = {
  convertDate: string | number | Date;
  className?: string; // className プロパティを追加
};

export default function ConvertDate({ convertDate, className }: Props) {
  const publishedAt = dayjs(convertDate).format('YYYY-MM-DD');

  return (
    <time
      dateTime={convertDate.toString()}
      className={`text-sm block font-en text-slate-400 ${className}`}
    >
      {publishedAt}
    </time>
  );
}
