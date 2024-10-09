export const Link = ({ link, onRemove }: { link: string, onRemove: any }) => {
	return (<div key={link} className="flex grow w-full h-full relative">
		<button className="bg-red-300 h-min p-2 static absolute top-0 right-0" onClick={onRemove}>❌</button>
		<iframe src={link} className="grow border-2 border-blue-200 p-2" />
	</div>);
}

export default Link;
