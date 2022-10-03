import React, { Component } from "recat";

class Buscador extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu imagen. Ejemplo: Fultbol"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
