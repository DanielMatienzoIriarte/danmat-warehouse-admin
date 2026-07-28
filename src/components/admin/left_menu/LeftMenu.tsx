

export default function LeftMenu() {
  //const [count, setCount] = useState(0)

  return (
    <aside id="sidebar-left" className="sidebar-left">
				
      <div className="sidebar-header">
        <div className="sidebar-title">
          Navigation
        </div>
        <div className="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
          <i className="fa fa-bars" aria-label="Toggle sidebar"></i>
        </div>
      </div>
				
      <div className="nano">
        <div className="nano-content">
          <nav id="menu" className="nav-main" role="navigation">
            <ul className="nav nav-main">
              <li className="nav-active">
                <a href="index.html">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="mailbox-folder.html">
                  <span className="pull-right label label-primary">182</span>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Mailbox</span>
                </a>
              </li>
              <li className="nav-parent">
                <a>
                  <i className="fa fa-copy" aria-hidden="true"></i>
                  <span>Pages</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a href="pages-signup.html">
                        Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="pages-signin.html">
                        Sign In
                    </a>
                  </li>
                  <li>
                    <a href="pages-recover-password.html">
                        Recover Password
                    </a>
                  </li>
                  <li>
                    <a href="pages-lock-screen.html">
                        Locked Screen
                    </a>
                  </li>
                  <li>
                    <a href="pages-user-profile.html">
                        User Profile
                    </a>
                  </li>
                  <li>
                    <a href="pages-session-timeout.html">
                        Session Timeout
                    </a>
                  </li>
                  <li>
                    <a href="pages-calendar.html">
                        Calendar
                    </a>
                  </li>
                  <li>
                    <a href="pages-timeline.html">
                        Timeline
                    </a>
                  </li>
                  <li>
                    <a href="pages-media-gallery.html">
                        Media Gallery
                    </a>
                  </li>
                  <li>
                    <a href="pages-invoice.html">
                        Invoice
                    </a>
                  </li>
                  <li>
                    <a href="pages-blank.html">
                        Blank Page
                    </a>
                  </li>
                  <li>
                    <a href="pages-404.html">
                        404
                    </a>
                  </li>
                  <li>
                    <a href="pages-500.html">
                        500
                    </a>
                  </li>
                  <li>
                    <a href="pages-log-viewer.html">
                        Log Viewer
                    </a>
                  </li>
                  <li>
                    <a href="pages-search-results.html">
                        Search Results
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a>
                  <i className="fa fa-tasks" aria-hidden="true"></i>
                  <span>UI Elements</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a href="ui-elements-typography.html">
                        Typography
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-icons.html">
                        Icons
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-tabs.html">
                        Tabs
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-panels.html">
                        Panels
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-widgets.html">
                        Widgets
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-portlets.html">
                        Portlets
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-buttons.html">
                        Buttons
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-alerts.html">
                        Alerts
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-notifications.html">
                        Notifications
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-modals.html">
                        Modals
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-lightbox.html">
                        Lightbox
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-progressbars.html">
                        Progress Bars
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-sliders.html">
                        Sliders
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-carousels.html">
                        Carousels
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-accordions.html">
                        Accordions
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-nestable.html">
                        Nestable
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-tree-view.html">
                        Tree View
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-grid-system.html">
                        Grid System
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-charts.html">
                        Charts
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-animations.html">
                        Animations
                    </a>
                  </li>
                  <li>
                    <a href="ui-elements-extra.html">
                        Extra
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a>
                  <i className="fa fa-list-alt" aria-hidden="true"></i>
                  <span>Forms</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a href="forms-basic.html">
                        Basic
                    </a>
                  </li>
                  <li>
                    <a href="forms-advanced.html">
                        Advanced
                    </a>
                  </li>
                  <li>
                    <a href="forms-validation.html">
                        Validation
                    </a>
                  </li>
                  <li>
                    <a href="forms-layouts.html">
                        Layouts
                    </a>
                  </li>
                  <li>
                    <a href="forms-wizard.html">
                        Wizard
                    </a>
                  </li>
                  <li>
                    <a href="forms-code-editor.html">
                        Code Editor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a>
                  <i className="fa fa-table" aria-hidden="true"></i>
                  <span>Tables</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a href="tables-basic.html">
                        Basic
                    </a>
                  </li>
                  <li>
                    <a href="tables-advanced.html">
                        Advanced
                    </a>
                  </li>
                  <li>
                    <a href="tables-responsive.html">
                        Responsive
                    </a>
                  </li>
                  <li>
                    <a href="tables-editable.html">
                        Editable
                    </a>
                  </li>
                  <li>
                    <a href="tables-ajax.html">
                        Ajax
                    </a>
                  </li>
                  <li>
                    <a href="tables-pricing.html">
                        Pricing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Maps</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a href="maps-google-maps.html">
                        Basic
                    </a>
                  </li>
                  <li>
                    <a href="maps-google-maps-builder.html">
                        Map Builder
                    </a>
                  </li>
                  <li>
                    <a href="maps-vector.html">
                        Vector
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a>
                  <i className="fa fa-columns" aria-hidden="true"></i>
                  <span>Layouts</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a href="layouts-default.html">
                        Default
                    </a>
                  </li>
                  <li>
                    <a href="layouts-boxed.html">
                        Boxed
                    </a>
                  </li>
                  <li>
                    <a href="layouts-menu-collapsed.html">
                        Menu Collapsed
                    </a>
                  </li>
                  <li>
                    <a href="layouts-scroll.html">
                        Scroll
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a>
                  <i className="fa fa-align-left" aria-hidden="true"></i>
                  <span>Menu Levels</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a>First Level</a>
                  </li>
                  <li className="nav-parent">
                    <a>Second Level</a>
                    <ul className="nav nav-children">
                      <li className="nav-parent">
                        <a>Third Level</a>
                        <ul className="nav nav-children">
                          <li>
                            <a>Third Level Link #1</a>
                          </li>
                          <li>
                            <a>Third Level Link #2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Second Level Link #1</a>
                      </li>
                      <li>
                        <a>Second Level Link #2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://themeforest.net/item/JSOFT-responsive-html5-template/4106987?ref=JSOFT" target="_blank">
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                  <span>Front-End <em className="not-included">(Not Included)</em></span>
                </a>
              </li>
            </ul>
          </nav>
    
          <hr className="separator" />
    
          <div className="sidebar-widget widget-tasks">
            <div className="widget-header">
              <h6>Projects</h6>
              <div className="widget-toggle">+</div>
            </div>
            <div className="widget-content">
              <ul className="list-unstyled m-none">
                <li><a href="#">JSOFT HTML5 Template</a></li>
                <li><a href="#">Tucson Template</a></li>
                <li><a href="#">JSOFT Admin</a></li>
              </ul>
            </div>
          </div>
    
          <hr className="separator" />
    
          <div className="sidebar-widget widget-stats">
            <div className="widget-header">
              <h6>Company Stats</h6>
              <div className="widget-toggle">+</div>
            </div>
            <div className="widget-content">
              <ul>
                <li>
                  <span className="stats-title">Stat 1</span>
                  <span className="stats-complete">85%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" style={{ width: '85%' }}>
                      <span className="sr-only">85% Complete</span>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="stats-title">Stat 2</span>
                  <span className="stats-complete">70%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" style={{ width: '70%' }}>
                      <span className="sr-only">70% Complete</span>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="stats-title">Stat 3</span>
                  <span className="stats-complete">2%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" style={{ width: '2%' }}>
                      <span className="sr-only">2% Complete</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
		</aside>
  )
}
