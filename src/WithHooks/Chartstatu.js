import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const style1="display: none"

function Chartstatu ({google,idas}) {
  const [chart, setChart] = useState(null);
  
//alert(idas);
  const [isLoading, setLoading] = useState(true);
const [Chartdata1, setChart1] = useState([]);
  useEffect(() => {
      getChart1();
  }, []);
  
  function getChart1() {
      axios.get(`https://asut.az/tax1/chart1.php`).then(function(response) {
         
        setChart1(response.data);
        setLoading(false);
      });
  }
  console.log(Chartdata1)

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable(Chartdata1);
    

      // Set chart options
      var options = {'title':'How Much Pizza I Ate Last Night',
                    'width':"100%",
                    'height':600};

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.PieChart(document.getElementById('pizzaChart'));
      function selectHandler() {
        var selectedItem = newChart.getSelection()[0];
        if (selectedItem) {
          var topping = data.getValue(selectedItem.row, 0);
    //      alert('The user selected ' + topping);
        }
      }

      google.visualization.events.addListener(newChart, 'select', selectHandler);    
      newChart.draw(data, options);

      setChart(newChart);
    }
   
  }, [google, chart]);
  
  
  return (
    
    <>
      {!google && <Spinner />}
      <div id="pizzaChart" className={!google ? 'd-none' : ''} />


      <div className="modal fade text-start" id="xlarge"   aria-labelledby="myModalLabel16" style={{style1}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="myModalLabel16">Extra Large Modal</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      Cake cupcake sugar plum. Sesame snaps pudding cupcake candy canes icing cheesecake. Sweet roll
                      pudding lollipop apple pie gummies dragée. Chocolate bar cookie caramels I love lollipop ice cream
                      tiramisu lollipop sweet.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary waves-effect waves-float waves-light" data-bs-dismiss="modal">Accept</button>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Chartstatu;