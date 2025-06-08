interface QuotesCardProps {
    author: string;
    quotes: string;
}

export default function QuotesCard({ author, quotes }: QuotesCardProps) {
    return (
        <div className="max-w-sm w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white">
            <div className="mb-4">
                <p className="text-lg italic">"{quotes}"</p>
            </div>
            <div className="text-right mt-4">
                <h3 className="text-lg font-semibold">- {author}</h3>
            </div>
        </div>
    );
}
