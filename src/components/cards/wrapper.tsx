export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="border rounded-[15px] shadow-[0px_4px_22px_0px_rgba(0,0,0,0.06)]">
			{children}
		</div>
	);
};
