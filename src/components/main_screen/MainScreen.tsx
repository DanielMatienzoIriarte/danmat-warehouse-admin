import React from 'react';

export default function MainScreen() {
  //const [count, setCount] = useState(0)

  return (
    <section role="main" className="content-body">
      <header className="page-header">
        <h2>Dashboard</h2>
      
        <div className="right-wrapper pull-right">
          <ol className="breadcrumbs">
            <li>
              <a href="index.html">
                <i className="fa fa-home"></i>
              </a>
            </li>
            <li><span>Dashboard</span></li>
          </ol>
      
          <a className="sidebar-right-toggle" data-open="sidebar-right"><i className="fa fa-chevron-left"></i></a>
        </div>
      </header>

      <div className="row">
        <div className="col-md-6">
          <section className="panel">
            <header className="panel-heading">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>

              <h2 className="panel-title">Best Seller</h2>
              <p className="panel-subtitle">Customize the graphs as much as you want, there are so many options and features to display information using JSOFT Admin Template.</p>
            </header>
            <div className="panel-body">
              <div className="chart chart-md" id="flotDashBasic"></div>
            </div>
          </section>
        </div>

        <div className="col-md-6">
          <section className="panel">
            <header className="panel-heading">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>
              <h2 className="panel-title">Server Usage</h2>
              <p className="panel-subtitle">It's easy to create custom graphs on JSOFT Admin Template, there are several graph types that you can use, such as lines, bars, pie charts, etc...</p>
            </header>
            <div className="panel-body">
              <div className="chart chart-md" id="flotDashRealTime"></div>
            </div>
          </section>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-12 col-xl-6">
          <section className="panel">
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-8">
                  <div className="chart-data-selector" id="salesSelectorWrapper">
                    <h2>
                      Sales:
                      <strong>
                        <select className="form-control" id="salesSelector">
                          <option value="JSOFT Admin" selected>JSOFT Admin</option>
                          <option value="JSOFT Drupal" >JSOFT Drupal</option>
                          <option value="JSOFT Wordpress" >JSOFT Wordpress</option>
                        </select>
                      </strong>
                    </h2>

                    <div id="salesSelectorItems" className="chart-data-selector-items mt-sm">
                      <div className="chart chart-sm chart-active" data-sales-rel="JSOFT Admin" id="flotDashSales1"></div>
                      <div className="chart chart-sm chart-hidden" data-sales-rel="JSOFT Drupal" id="flotDashSales2"></div>
                      <div className="chart chart-sm chart-hidden" data-sales-rel="JSOFT Wordpress" id="flotDashSales3"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <h2 className="panel-title mt-md">Sales Goal</h2>
                  <div className="liquid-meter-wrapper liquid-meter-sm mt-lg">
                    <div className="liquid-meter">
                      <meter min="0" max="100" value="35" id="meterSales"></meter>
                    </div>
                    <div className="liquid-meter-selector" id="meterSalesSel">
                      <a href="#" data-val="35" className="active">Monthly Goal</a>
                      <a href="#" data-val="28">Annual Goal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-6 col-lg-12 col-xl-6">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-6">
              <section className="panel panel-featured-left panel-featured-primary">
                <div className="panel-body">
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-primary">
                        <i className="fa fa-life-ring"></i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Support Questions</h4>
                        <div className="info">
                          <strong className="amount">1281</strong>
                          <span className="text-primary">(14 unread)</span>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <a className="text-muted text-uppercase">(view all)</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-md-12 col-lg-6 col-xl-6">
              <section className="panel panel-featured-left panel-featured-secondary">
                <div className="panel-body">
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-secondary">
                        <i className="fa fa-usd"></i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Total Profit</h4>
                        <div className="info">
                          <strong className="amount">$ 14,890.30</strong>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <a className="text-muted text-uppercase">(withdraw)</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-md-12 col-lg-6 col-xl-6">
              <section className="panel panel-featured-left panel-featured-tertiary">
                <div className="panel-body">
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-tertiary">
                        <i className="fa fa-shopping-cart"></i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Today's Orders</h4>
                        <div className="info">
                          <strong className="amount">38</strong>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <a className="text-muted text-uppercase">(statement)</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-md-12 col-lg-6 col-xl-6">
              <section className="panel panel-featured-left panel-featured-quartenary">
                <div className="panel-body">
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-quartenary">
                        <i className="fa fa-user"></i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Today's Visitors</h4>
                        <div className="info">
                          <strong className="amount">3765</strong>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <a className="text-muted text-uppercase">(report)</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-3 col-lg-6">
          <section className="panel panel-transparent">
            <header className="panel-heading">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>

              <h2 className="panel-title">My Profile</h2>
            </header>
            <div className="panel-body">
              <section className="panel panel-group">
                <header className="panel-heading bg-primary">

                  <div className="widget-profile-info">
                    <div className="profile-picture">
                      <img src="imgs/logged-user.jpg" />
                    </div>
                    <div className="profile-info">
                      <h4 className="name text-semibold">John Doe</h4>
                      <h5 className="role">Administrator</h5>
                      <div className="profile-footer">
                        <a href="#">(edit profile)</a>
                      </div>
                    </div>
                  </div>

                </header>
                <div id="accordion">
                  <div className="panel panel-accordion panel-accordion-first">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1One">
                          <i className="fa fa-check"></i> Tasks
                        </a>
                      </h4>
                    </div>
                    <div id="collapse1One" className="accordion-body collapse in">
                      <div className="panel-body">
                        <ul className="widget-todo-list">
                          <li>
                            <div className="checkbox-custom checkbox-default">
                              <input type="checkbox" id="todoListItem1" className="todo-check" />
                              <label className="todo-label"><span>Lorem ipsum dolor sit amet</span></label>
                            </div>
                            <div className="todo-actions">
                              <a className="todo-remove" href="#">
                                <i className="fa fa-times"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-custom checkbox-default">
                              <input type="checkbox" id="todoListItem2" className="todo-check" />
                              <label className="todo-label"><span>Lorem ipsum dolor sit amet</span></label>
                            </div>
                            <div className="todo-actions">
                              <a className="todo-remove" href="#">
                                <i className="fa fa-times"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-custom checkbox-default">
                              <input type="checkbox" id="todoListItem3" className="todo-check" />
                              <label className="todo-label"><span>Lorem ipsum dolor sit amet</span></label>
                            </div>
                            <div className="todo-actions">
                              <a className="todo-remove" href="#">
                                <i className="fa fa-times"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-custom checkbox-default">
                              <input type="checkbox" id="todoListItem4" className="todo-check" />
                              <label className="todo-label"><span>Lorem ipsum dolor sit amet</span></label>
                            </div>
                            <div className="todo-actions">
                              <a className="todo-remove" href="#">
                                <i className="fa fa-times"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-custom checkbox-default">
                              <input type="checkbox" id="todoListItem5" className="todo-check" />
                              <label className="todo-label"><span>Lorem ipsum dolor sit amet</span></label>
                            </div>
                            <div className="todo-actions">
                              <a className="todo-remove" href="#">
                                <i className="fa fa-times"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-custom checkbox-default">
                              <input type="checkbox" id="todoListItem6" className="todo-check" />
                              <label className="todo-label"><span>Lorem ipsum dolor sit amet</span></label>
                            </div>
                            <div className="todo-actions">
                              <a className="todo-remove" href="#">
                                <i className="fa fa-times"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                        <hr className="solid mt-sm mb-lg" />
                        <form method="get" className="form-horizontal form-bordered">
                          <div className="form-group">
                            <div className="col-sm-12">
                              <div className="input-group mb-md">
                                <input type="text" className="form-control" />
                                <div className="input-group-btn">
                                  <button type="button" className="btn btn-primary">Add</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-accordion">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1Two">
                            <i className="fa fa-comment"></i> Messages
                        </a>
                      </h4>
                    </div>
                    <div id="collapse1Two" className="accordion-body collapse">
                      <div className="panel-body">
                        <ul className="simple-user-list mb-xlg">
                          <li>
                            <figure className="image rounded">
                              <img src="/imgs/!sample-user.jpg" alt="Joseph Doe Junior" className="img-circle" />
                            </figure>
                            <span className="title">Joseph Doe Junior</span>
                            <span className="message">Lorem ipsum dolor sit.</span>
                          </li>
                          <li>
                            <figure className="image rounded">
                              <img src="/imgs/!sample-user.jpg" alt="Joseph Junior" className="img-circle" />
                            </figure>
                            <span className="title">Joseph Junior</span>
                            <span className="message">Lorem ipsum dolor sit.</span>
                          </li>
                          <li>
                            <figure className="image rounded">
                              <img src="/imgs/!sample-user.jpg" alt="Joe Junior" className="img-circle" />
                            </figure>
                            <span className="title">Joe Junior</span>
                            <span className="message">Lorem ipsum dolor sit.</span>
                          </li>
                          <li>
                            <figure className="image rounded">
                              <img src="/imgs/!sample-user.jpg" alt="Joseph Doe Junior" className="img-circle" />
                            </figure>
                            <span className="title">Joseph Doe Junior</span>
                            <span className="message">Lorem ipsum dolor sit.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </section>
        </div>
        <div className="col-xl-3 col-lg-6">
          <section className="panel panel-transparent">
            <header className="panel-heading">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>

              <h2 className="panel-title">My Stats</h2>
            </header>
            <div className="panel-body">
              <section className="panel">
                <div className="panel-body">
                  <div className="small-chart pull-right" id="sparklineBarDash"></div>
                  <script type="text/javascript">
                    var sparklineBarDashData = [5, 6, 7, 2, 0, 4 , 2, 4, 2, 0, 4 , 2, 4, 2, 0, 4];
                  </script>
                  <div className="h4 text-bold mb-none">488</div>
                  <p className="text-xs text-muted mb-none">Average Profile Visits</p>
                </div>
              </section>
              <section className="panel">
                <div className="panel-body">
                  <div className="circular-bar circular-bar-xs m-none mt-xs mr-md pull-right">
                    <div className="circular-bar-chart" data-percent="45" data-plugin-options='{ "barColor": "#2baab1", "delay": 300, "size": 50, "lineWidth": 4 }'>
                      <strong>Average</strong>
                      <label><span className="percent">45</span>%</label>
                    </div>
                  </div>
                  <div className="h4 text-bold mb-none">12</div>
                  <p className="text-xs text-muted mb-none">Working Projects</p>
                </div>
              </section>
              <section className="panel">
                <div className="panel-body">
                  <div className="small-chart pull-right" id="sparklineLineDash"></div>
                  <script type="text/javascript">
                    var sparklineLineDashData = [15, 16, 17, 19, 10, 15, 13, 12, 12, 14, 16, 17];
                  </script>
                  <div className="h4 text-bold mb-none">89</div>
                  <p className="text-xs text-muted mb-none">Pending Tasks</p>
                </div>
              </section>
            </div>
          </section>
          <section className="panel">
            <header className="panel-heading">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>

              <h2 className="panel-title">
                <span className="label label-primary label-sm text-normal va-middle mr-sm">198</span>
                <span className="va-middle">Friends</span>
              </h2>
            </header>
            <div className="panel-body">
              <div className="content">
                <ul className="simple-user-list">
                  <li>
                    <figure className="image rounded">
                      <img src="/imgs/!sample-user.jpg" alt="Joseph Doe Junior" className="img-circle" />
                    </figure>
                    <span className="title">Joseph Doe Junior</span>
                    <span className="message truncate">Lorem ipsum dolor sit.</span>
                  </li>
                  <li>
                    <figure className="image rounded">
                      <img src="/imgs/!sample-user.jpg" alt="Joseph Junior" className="img-circle" />
                    </figure>
                    <span className="title">Joseph Junior</span>
                    <span className="message truncate">Lorem ipsum dolor sit.</span>
                  </li>
                  <li>
                    <figure className="image rounded">
                      <img src="/imgs/!sample-user.jpg" alt="Joe Junior" className="img-circle" />
                    </figure>
                    <span className="title">Joe Junior</span>
                    <span className="message truncate">Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
                <hr className="dotted short" />
                <div className="text-right">
                  <a className="text-uppercase text-muted" href="#">(View All)</a>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="input-group input-search">
                <input type="text" className="form-control" name="q" id="q" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="col-xl-6 col-lg-12">
          <section className="panel">
            <header className="panel-heading panel-heading-transparent">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>

              <h2 className="panel-title">Company Activity</h2>
            </header>
            <div className="panel-body">
              <div className="timeline timeline-simple mt-xlg mb-md">
                <div className="tm-body">
                  <div className="tm-title">
                    <h3 className="h5 text-uppercase">November 2013</h3>
                  </div>
                  <ol className="tm-items">
                    <li>
                      <div className="tm-box">
                        <p className="text-muted mb-none">7 months ago.</p>
                        <p>
                          It's awesome when we find a good solution for our projects, JSOFT Admin is <span className="text-primary">#awesome</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="tm-box">
                        <p className="text-muted mb-none">7 months ago.</p>
                        <p>
                          Checkout! How cool is that!
                        </p>
                        <div className="thumbnail-gallery">
                          <a className="img-thumbnail lightbox" href="assets/images/projects/project-4.jpg" data-plugin-options='{ "type":"image" }'>
                            <img className="img-responsive" width="215" src="/imgs/projects/project-4.jpg" />
                            <span className="zoom">
                              <i className="fa fa-search"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <section className="panel panel-transparent">
            <header className="panel-heading">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>

              <h2 className="panel-title">Global Stats</h2>
            </header>
            <div className="panel-body">
              <div id="vectorMapWorld" style={{ width: '100%', height: '350px' }}></div>
            </div>
          </section>
        </div>
        <div className="col-lg-6 col-md-12">
          <section className="panel">
            <header className="panel-heading panel-heading-transparent">
              <div className="panel-actions">
                <a href="#" className="fa fa-caret-down"></a>
                <a href="#" className="fa fa-times"></a>
              </div>

              <h2 className="panel-title">Projects Stats</h2>
            </header>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped mb-none">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project</th>
                      <th>Status</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>JSOFT - Responsive HTML5 Template</td>
                      <td><span className="label label-success">Success</span></td>
                      <td>
                        <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                          <div className="progress-bar progress-bar-primary" role="progressbar" style={{ width: '100%' }}>
                            100%
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>JSOFT - Responsive Drupal 7 Theme</td>
                      <td><span className="label label-success">Success</span></td>
                      <td>
                        <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                          <div className="progress-bar progress-bar-primary" role="progressbar" style={{ width: '100%' }}>
                            100%
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Tucson - Responsive HTML5 Template</td>
                      <td><span className="label label-warning">Warning</span></td>
                      <td>
                        <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                          <div className="progress-bar progress-bar-primary" role="progressbar" style={{ width: '60%' }}>
                            60%
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Tucson - Responsive Business WordPress Theme</td>
                      <td><span className="label label-success">Success</span></td>
                      <td>
                        <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                          <div className="progress-bar progress-bar-primary" role="progressbar" style={{ width: '90%' }}>
                            90%
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>JSOFT - Responsive Admin HTML5 Template</td>
                      <td><span className="label label-warning">Warning</span></td>
                      <td>
                        <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                          <div className="progress-bar progress-bar-primary" role="progressbar" style={{ width: '45%' }}>
                            45%
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>JSOFT - Responsive HTML5 Template</td>
                      <td><span className="label label-danger">Danger</span></td>
                      <td>
                        <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                          <div className="progress-bar progress-bar-primary" role="progressbar" style={{ width: '40%' }}>
                            40%
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>JSOFT - Responsive Drupal 7 Theme</td>
                      <td><span className="label label-success">Success</span></td>
                      <td>
                        <div className="progress progress-sm progress-half-rounded mt-xs light">
                          <div className="progress-bar progress-bar-primary" role="progressbar" style={{ width: '95%' }}>
                            95%
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
