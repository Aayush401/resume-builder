export default function DevNotice() {
    if (process.env.NODE_ENV === "production") return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 rounded-md bg-yellow-100 p-4 shadow-lg border border-yellow-200 opacity-90 hover:opacity-100 transition-opacity max-w-sm">
            <h3 className="font-bold text-yellow-800 mb-1">Development Mode</h3>
            <p className="text-sm text-yellow-700">
                Authentication is mocked. You are automatically logged in as <b>bypass-user</b>.
                <br />
                AI features will return mock data.
            </p>
        </div>
    );
}
