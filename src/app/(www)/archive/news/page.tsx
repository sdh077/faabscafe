import News from "./news";


export default function Page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}) {

    return (
        <div className="overflow-x-auto">
            <News page={Number(searchParams.page ?? '1')} />
        </div>
    );
}
