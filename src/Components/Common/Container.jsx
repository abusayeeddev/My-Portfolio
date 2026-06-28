

const Container = ({className, children }) => {
  return (
    <div className={`w-330 mx-auto px-5 lg:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container
