

const Footer = () => {
const today = new Date();
 const year = today.getFullYear();

return (
  <>
 <footer className="footer footer-light">
      <p className="clearfix mb-0">
        <span className="float-md-start d-block d-md-inline-block mt-25">
          COPYRIGHT  ©  {year}
          <span className="d-none d-sm-inline-block">, All rights Reserved</span></span>
         
         </p>
    </footer>

</>
)
   
}

export default Footer;

