import "./Headers.css"

const Headers = () => {
  return (
    <div className="headers">
            <div className='header'>
                <div className='title-div'>
                    <p className='title'>Our blog</p>
                </div>
                <div className='title-2-div'>
                    <p className='title-2'>Resources and insights</p>
                </div>
                <div className='title-3-div'>
                    <p className='title-3'>The latest industry news, interviews, technologies, and resources.</p>
                </div>
                <div className='search-div'>
                <input type="text" placeholder='Search' className='search' />
                </div>
            </div>
    </div>
  )
}

export default Headers
