

const Container = ({className, children }) => {
  return (
    <div className={`w-330 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
