//rfce
import React from 'react'

function Employee() {
    return (
        <div>
            <table class="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">S.NO.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">id_no</th>
      <th scope="col">designation</th>
      <th scope="col">pay_scale</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Employee
