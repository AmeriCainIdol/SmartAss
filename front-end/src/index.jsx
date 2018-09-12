import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (<div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-8">
              <h3>
                h3. Lorem ipsum dolor sit amet.
					</h3>
              <ol>
                <li class="list-item">
                  Lorem ipsum dolor sit amet
						</li>
                <li class="list-item">
                  Consectetur adipiscing elit
						</li>
                <li class="list-item">
                  Integer molestie lorem at massa
						</li>
                <li class="list-item">
                  Facilisis in pretium nisl aliquet
						</li>
                <li class="list-item">
                  Nulla volutpat aliquam velit
						</li>
                <li class="list-item">
                  Faucibus porta lacus fringilla vel
						</li>
                <li class="list-item">
                  Aenean sit amet erat nunc
						</li>
                <li class="list-item">
                  Eget porttitor lorem
						</li>
              </ol>
            </div>
            <div class="col-md-4">
              <form role="form">
                <div class="form-group">

                  <label for="exampleInputEmail1">
                    Email address
							</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" />
                </div>
                <div class="form-group">

                  <label for="exampleInputPassword1">
                    Password
							</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group">

                  <label for="exampleInputFile">
                    File input
							</label>
                  <input type="file" class="form-control-file" id="exampleInputFile" />
                  <p class="help-block">
                    Example block-level help text here.
							</p>
                </div>
                <div class="checkbox">

                  <label>
                    <input type="checkbox" /> Check me out
							</label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
						</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));