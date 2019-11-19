const Email = () => {
    const style1 = {
        fillRule:"evenodd",
        clipRule:"evenodd",
        strokeLinejoin:"round",
        strokeMiterlimit:2
    }

    const style2 = {
        fillRule:"nonzero"
    }

    return(
        <svg className="emailSVG" width="100%" height="100%"  viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" style={style1}>
        <path d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm6.99,6.98l-6.99,5.666l-6.991,-5.666l13.981,0Zm0.01,10l-14,0l0,-8.505l7,5.673l7,-5.672l0,8.504Z" style={style2}/>
        </svg>
    )
}

export default Email;