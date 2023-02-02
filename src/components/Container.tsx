interface Props {
  header: JSX.Element
  children: JSX.Element
}

const Container: React.FC<Props> = ({ header, children }) => {
  return (
    <div className="z-10 h-[calc(100vh_-_200px)] w-full max-w-[1420px] translate-y-[40px] rounded-xl bg-white p-8">
      <div className="border-b-2 border-primary pl-3 pb-3">{header}</div>
      {children}
    </div>
  )
}

export default Container
