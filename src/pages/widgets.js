import React from "react";

function widgets() {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="../index3.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="../dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="../dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="../dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="../index3.html" className="brand-link">
          <img
            src="../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="../dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="widgets.html" className="nav-link active">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout/top-nav-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout/fixed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="layout/fixed-sidebar-custom.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Fixed Sidebar <small>+ Custom Area</small>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout/fixed-topnav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout/fixed-footer.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="layout/collapsed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="charts/uplot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>uPlot</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    UI Elements
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="UI/modals.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Modals &amp; Alerts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="UI/navbar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Navbar &amp; Tabs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="UI/timeline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="UI/ribbons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ribbons</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Forms
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Tables
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>Gallery</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="kanban.html" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>Kanban Board</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Pages
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/e-commerce.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/project-add.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/project-edit.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/project-detail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/contact-us.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Contact us</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Extras
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v1
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="examples/login.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Login v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="examples/register.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Register v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="examples/forgot-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="examples/recover-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v1</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v2
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="examples/login-v2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Login v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="examples/register-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Register v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="examples/forgot-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="examples/recover-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="examples/lockscreen.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/language-menu.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-search" />
                  <p>
                    Search
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="search/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Search</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="search/enhanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Enhanced</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="../iframe.html" className="nav-link">
                  <i className="nav-icon fas fa-ellipsis-h" />
                  <p>Tabbed IFrame Plugin</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Documentation</p>
                </a>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-circle" />
                  <p>
                    Level 1
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Widgets</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Widgets</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <h5 className="mb-2">Info Box</h5>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box">
                  <span className="info-box-icon bg-info">
                    <i className="far fa-envelope" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Messages</span>
                    <span className="info-box-number">1,410</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box">
                  <span className="info-box-icon bg-success">
                    <i className="far fa-flag" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Bookmarks</span>
                    <span className="info-box-number">410</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box">
                  <span className="info-box-icon bg-warning">
                    <i className="far fa-copy" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Uploads</span>
                    <span className="info-box-number">13,648</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box">
                  <span className="info-box-icon bg-danger">
                    <i className="far fa-star" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Likes</span>
                    <span className="info-box-number">93,139</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h5 className="mb-2">
              Info Box With Custom Shadows{" "}
              <small>
                <i>Using Bootstrap's Shadow Utility</i>
              </small>
            </h5>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box shadow-none">
                  <span className="info-box-icon bg-info">
                    <i className="far fa-envelope" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Shadows</span>
                    <span className="info-box-number">None</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box shadow-sm">
                  <span className="info-box-icon bg-success">
                    <i className="far fa-flag" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Shadows</span>
                    <span className="info-box-number">Small</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box shadow">
                  <span className="info-box-icon bg-warning">
                    <i className="far fa-copy" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Shadows</span>
                    <span className="info-box-number">Regular</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box shadow-lg">
                  <span className="info-box-icon bg-danger">
                    <i className="far fa-star" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Shadows</span>
                    <span className="info-box-number">Large</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h5 className="mt-4 mb-2">
              Info Box With <code>bg-*</code>
            </h5>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon">
                    <i className="far fa-bookmark" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Bookmarks</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-success">
                  <span className="info-box-icon">
                    <i className="far fa-thumbs-up" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Likes</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-warning">
                  <span className="info-box-icon">
                    <i className="far fa-calendar-alt" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Events</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-danger">
                  <span className="info-box-icon">
                    <i className="fas fa-comments" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Comments</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h5 className="mt-4 mb-2">
              Info Box With <code>bg-gradient-*</code>
            </h5>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-gradient-info">
                  <span className="info-box-icon">
                    <i className="far fa-bookmark" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Bookmarks</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-gradient-success">
                  <span className="info-box-icon">
                    <i className="far fa-thumbs-up" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Likes</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-gradient-warning">
                  <span className="info-box-icon">
                    <i className="far fa-calendar-alt" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Events</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-gradient-danger">
                  <span className="info-box-icon">
                    <i className="fas fa-comments" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Comments</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            {/* Small Box (Stat card) */}
            <h5 className="mb-2 mt-4">Small Box</h5>
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small card */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small card */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small card */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-plus" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small card */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-chart-pie" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Small Box (Stat card) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small card */}
                <div className="small-box bg-info">
                  {/* Loading (remove the following to stop the loading)*/}
                  <div className="overlay">
                    <i className="fas fa-3x fa-sync-alt" />
                  </div>
                  {/* end loading */}
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small card */}
                <div className="small-box bg-success">
                  {/* Loading (remove the following to stop the loading)*/}
                  <div className="overlay dark">
                    <i className="fas fa-3x fa-sync-alt" />
                  </div>
                  {/* end loading */}
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h4 className="mb-2 mt-4">Cards</h4>
            <h5 className="mb-2">Abilities</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-primary collapsed-card">
                  <div className="card-header">
                    <h3 className="card-title">Expandable</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-success">
                  <div className="card-header">
                    <h3 className="card-title">Collapsable</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-warning">
                  <div className="card-header">
                    <h3 className="card-title">Removable</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-danger">
                  <div className="card-header">
                    <h3 className="card-title">Maximizable</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="maximize"
                      >
                        <i className="fas fa-expand" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-3">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Card Refresh</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="card-refresh"
                        data-source="widgets.html"
                        data-source-selector="#card-refresh-content"
                      >
                        <i className="fas fa-sync-alt" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                <div className="d-none" id="card-refresh-content">
                  The body of the card after card refresh
                </div>
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-success">
                  <div className="card-header">
                    <h3 className="card-title">All together</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="card-refresh"
                        data-source="widgets.html"
                        data-source-selector="#card-refresh-content"
                        data-load-on-init="false"
                      >
                        <i className="fas fa-sync-alt" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="maximize"
                      >
                        <i className="fas fa-expand" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-warning">
                  <div className="card-header">
                    <h3 className="card-title">Loading state</h3>
                  </div>
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                  {/* Loading (remove the following to stop the loading)*/}
                  <div className="overlay">
                    <i className="fas fa-2x fa-sync-alt" />
                  </div>
                  {/* end loading */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-danger">
                  <div className="card-header">
                    <h3 className="card-title">Loading state (dark)</h3>
                  </div>
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                  {/* Loading (remove the following to stop the loading)*/}
                  <div className="overlay dark">
                    <i className="fas fa-2x fa-sync-alt" />
                  </div>
                  {/* end loading */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h5 className="mb-2">
              Custom Shadows Variations{" "}
              <small>
                <i>Using Bootstrap's Shadow Utility</i>
              </small>
            </h5>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-primary shadow-none">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - None</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-success shadow-sm">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - Small</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-warning shadow">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - Regular</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-danger shadow-lg">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - Large</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="maximize"
                      >
                        <i className="fas fa-expand" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h5 className="mb-2">Colors Variations</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Primary</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-success">
                  <div className="card-header">
                    <h3 className="card-title">Success</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-warning">
                  <div className="card-header">
                    <h3 className="card-title">Warning</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-danger">
                  <div className="card-header">
                    <h3 className="card-title">Danger</h3>
                  </div>
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-3">
                <div className="card card-outline card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Primary Outline</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-outline card-success">
                  <div className="card-header">
                    <h3 className="card-title">Success Outline</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-outline card-warning">
                  <div className="card-header">
                    <h3 className="card-title">Warning Outline</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card card-outline card-danger">
                  <div className="card-header">
                    <h3 className="card-title">Danger Outline</h3>
                  </div>
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-3">
                <div className="card bg-primary">
                  <div className="card-header">
                    <h3 className="card-title">Primary</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card bg-success">
                  <div className="card-header">
                    <h3 className="card-title">Success</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card bg-warning">
                  <div className="card-header">
                    <h3 className="card-title">Warning</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card bg-danger">
                  <div className="card-header">
                    <h3 className="card-title">Danger</h3>
                  </div>
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-3">
                <div className="card bg-gradient-primary">
                  <div className="card-header">
                    <h3 className="card-title">Primary Gradient</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card bg-gradient-success">
                  <div className="card-header">
                    <h3 className="card-title">Success Gradient</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card bg-gradient-warning">
                  <div className="card-header">
                    <h3 className="card-title">Warning Gradient</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                <div className="card bg-gradient-danger">
                  <div className="card-header">
                    <h3 className="card-title">Danger Gradient</h3>
                  </div>
                  <div className="card-body">The body of the card</div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            {/* Direct Chat */}
            <h4 className="mt-4 mb-2">Direct Chat</h4>
            <div className="row">
              <div className="col-md-3">
                {/* DIRECT CHAT PRIMARY */}
                <div className="card card-primary card-outline direct-chat direct-chat-primary">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge bg-primary">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-primary">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                {/* DIRECT CHAT SUCCESS */}
                <div className="card card-success card-outline direct-chat direct-chat-success">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge bg-success">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-success">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                {/* DIRECT CHAT WARNING */}
                <div className="card card-warning direct-chat direct-chat-warning">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge bg-danger">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-warning">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                {/* DIRECT CHAT DANGER */}
                <div className="card card-danger direct-chat direct-chat-danger">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-danger">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h5 className="mb-2">
              Custom Shadows Variations{" "}
              <small>
                <i>Using Bootstrap's Shadow Utility</i>
              </small>
            </h5>
            <div className="row">
              <div className="col-md-3">
                {/* DIRECT CHAT PRIMARY */}
                <div className="card card-primary card-outline direct-chat direct-chat-primary shadow-none">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - None</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge bg-primary">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-primary">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                {/* DIRECT CHAT SUCCESS */}
                <div className="card card-success card-outline direct-chat direct-chat-success shadow-sm">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - Small</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge bg-success">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-success">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                {/* DIRECT CHAT WARNING */}
                <div className="card card-warning direct-chat direct-chat-warning shadow">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - Regular</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge bg-danger">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-warning">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-3">
                {/* DIRECT CHAT DANGER */}
                <div className="card card-danger direct-chat direct-chat-danger shadow-lg">
                  <div className="card-header">
                    <h3 className="card-title">Shadow - Large</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge">
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user1-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img
                          className="direct-chat-img"
                          src="../dist/img/user3-128x128.jpg"
                          alt="Message User Image"
                        />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="../dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contatcts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-danger">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <h3 className="mt-4 mb-4">Social Widgets</h3>
            <div className="row">
              <div className="col-md-4">
                {/* Widget: user widget style 2 */}
                <div className="card card-widget widget-user-2">
                  {/* Add the bg color to the header using any of the bg-* classes */}
                  <div className="widget-user-header bg-warning">
                    <div className="widget-user-image">
                      <img
                        className="img-circle elevation-2"
                        src="../dist/img/user7-128x128.jpg"
                        alt="User Avatar"
                      />
                    </div>
                    {/* /.widget-user-image */}
                    <h3 className="widget-user-username">Nadia Carmichael</h3>
                    <h5 className="widget-user-desc">Lead Developer</h5>
                  </div>
                  <div className="card-footer p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Projects{" "}
                          <span className="float-right badge bg-primary">
                            31
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Tasks{" "}
                          <span className="float-right badge bg-info">5</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Completed Projects{" "}
                          <span className="float-right badge bg-success">
                            12
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Followers{" "}
                          <span className="float-right badge bg-danger">
                            842
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.widget-user */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* Widget: user widget style 1 */}
                <div className="card card-widget widget-user">
                  {/* Add the bg color to the header using any of the bg-* classes */}
                  <div className="widget-user-header bg-info">
                    <h3 className="widget-user-username">Alexander Pierce</h3>
                    <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                  </div>
                  <div className="widget-user-image">
                    <img
                      className="img-circle elevation-2"
                      src="../dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                    />
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">3,200</h5>
                          <span className="description-text">SALES</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">13,000</h5>
                          <span className="description-text">FOLLOWERS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4">
                        <div className="description-block">
                          <h5 className="description-header">35</h5>
                          <span className="description-text">PRODUCTS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                </div>
                {/* /.widget-user */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* Widget: user widget style 1 */}
                <div className="card card-widget widget-user">
                  {/* Add the bg color to the header using any of the bg-* classes */}
                  <div
                    className="widget-user-header text-white"
                    style={{
                      background: 'url("../dist/img/photo1.png") center center',
                    }}
                  >
                    <h3 className="widget-user-username text-right">
                      Elizabeth Pierce
                    </h3>
                    <h5 className="widget-user-desc text-right">
                      Web Designer
                    </h5>
                  </div>
                  <div className="widget-user-image">
                    <img
                      className="img-circle"
                      src="../dist/img/user3-128x128.jpg"
                      alt="User Avatar"
                    />
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">3,200</h5>
                          <span className="description-text">SALES</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">13,000</h5>
                          <span className="description-text">FOLLOWERS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4">
                        <div className="description-block">
                          <h5 className="description-header">35</h5>
                          <span className="description-text">PRODUCTS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                </div>
                {/* /.widget-user */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-6">
                {/* Box Comment */}
                <div className="card card-widget">
                  <div className="card-header">
                    <div className="user-block">
                      <img
                        className="img-circle"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Image"
                      />
                      <span className="username">
                        <a href="#">Jonathan Burke Jr.</a>
                      </span>
                      <span className="description">
                        Shared publicly - 7:30 PM Today
                      </span>
                    </div>
                    {/* /.user-block */}
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Mark as read"
                      >
                        <i className="far fa-circle" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <img
                      className="img-fluid pad"
                      src="../dist/img/photo2.png"
                      alt="Photo"
                    />
                    <p>
                      I took this photo this morning. What do you guys think?
                    </p>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-share" /> Share
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-thumbs-up" /> Like
                    </button>
                    <span className="float-right text-muted">
                      127 likes - 3 comments
                    </span>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer card-comments">
                    <div className="card-comment">
                      {/* User image */}
                      <img
                        className="img-circle img-sm"
                        src="../dist/img/user3-128x128.jpg"
                        alt="User Image"
                      />
                      <div className="comment-text">
                        <span className="username">
                          Maria Gonzales
                          <span className="text-muted float-right">
                            8:03 PM Today
                          </span>
                        </span>
                        {/* /.username */}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </div>
                      {/* /.comment-text */}
                    </div>
                    {/* /.card-comment */}
                    <div className="card-comment">
                      {/* User image */}
                      <img
                        className="img-circle img-sm"
                        src="../dist/img/user4-128x128.jpg"
                        alt="User Image"
                      />
                      <div className="comment-text">
                        <span className="username">
                          Luna Stark
                          <span className="text-muted float-right">
                            8:03 PM Today
                          </span>
                        </span>
                        {/* /.username */}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </div>
                      {/* /.comment-text */}
                    </div>
                    {/* /.card-comment */}
                  </div>
                  {/* /.card-footer */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <img
                        className="img-fluid img-circle img-sm"
                        src="../dist/img/user4-128x128.jpg"
                        alt="Alt Text"
                      />
                      {/* .img-push is used to add margin to elements next to floating images */}
                      <div className="img-push">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Press enter to post comment"
                        />
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                {/* Box Comment */}
                <div className="card card-widget">
                  <div className="card-header">
                    <div className="user-block">
                      <img
                        className="img-circle"
                        src="../dist/img/user1-128x128.jpg"
                        alt="User Image"
                      />
                      <span className="username">
                        <a href="#">Jonathan Burke Jr.</a>
                      </span>
                      <span className="description">
                        Shared publicly - 7:30 PM Today
                      </span>
                    </div>
                    {/* /.user-block */}
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Mark as read"
                      >
                        <i className="far fa-circle" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* /.card-tools */}
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* post text */}
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at
                    </p>
                    <p>
                      the coast of the Semantics, a large language ocean. A
                      small river named Duden flows by their place and supplies
                      it with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth.
                    </p>
                    {/* Attachment */}
                    <div className="attachment-block clearfix">
                      <img
                        className="attachment-img"
                        src="../dist/img/photo1.png"
                        alt="Attachment Image"
                      />
                      <div className="attachment-pushed">
                        <h4 className="attachment-heading">
                          <a href="https://www.lipsum.com/">
                            Lorem ipsum text generator
                          </a>
                        </h4>
                        <div className="attachment-text">
                          Description about the attachment can be placed here.
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry... <a href="#">more</a>
                        </div>
                        {/* /.attachment-text */}
                      </div>
                      {/* /.attachment-pushed */}
                    </div>
                    {/* /.attachment-block */}
                    {/* Social sharing buttons */}
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-share" /> Share
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-thumbs-up" /> Like
                    </button>
                    <span className="float-right text-muted">
                      45 likes - 2 comments
                    </span>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer card-comments">
                    <div className="card-comment">
                      {/* User image */}
                      <img
                        className="img-circle img-sm"
                        src="../dist/img/user3-128x128.jpg"
                        alt="User Image"
                      />
                      <div className="comment-text">
                        <span className="username">
                          Maria Gonzales
                          <span className="text-muted float-right">
                            8:03 PM Today
                          </span>
                        </span>
                        {/* /.username */}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </div>
                      {/* /.comment-text */}
                    </div>
                    {/* /.card-comment */}
                    <div className="card-comment">
                      {/* User image */}
                      <img
                        className="img-circle img-sm"
                        src="../dist/img/user5-128x128.jpg"
                        alt="User Image"
                      />
                      <div className="comment-text">
                        <span className="username">
                          Nora Havisham
                          <span className="text-muted float-right">
                            8:03 PM Today
                          </span>
                        </span>
                        {/* /.username */}
                        The point of using Lorem Ipsum is that it hrs a
                        morer-less normal distribution of letters, as opposed to
                        using 'Content here, content here', making it look like
                        readable English.
                      </div>
                      {/* /.comment-text */}
                    </div>
                    {/* /.card-comment */}
                  </div>
                  {/* /.card-footer */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <img
                        className="img-fluid img-circle img-sm"
                        src="../dist/img/user4-128x128.jpg"
                        alt="Alt Text"
                      />
                      {/* .img-push is used to add margin to elements next to floating images */}
                      <div className="img-push">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Press enter to post comment"
                        />
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* =========================================================== */}
            <h5 className="mb-2">
              Custom Shadows Variations{" "}
              <small>
                <i>Using Bootstrap's Shadow Utility</i>
              </small>
            </h5>
            <div className="row">
              <div className="col-md-4">
                {/* Widget: user widget style 2 */}
                <div className="card card-widget widget-user-2 shadow-sm">
                  {/* Add the bg color to the header using any of the bg-* classes */}
                  <div className="widget-user-header bg-warning">
                    <div className="widget-user-image">
                      <img
                        className="img-circle elevation-2"
                        src="../dist/img/user7-128x128.jpg"
                        alt="User Avatar"
                      />
                    </div>
                    {/* /.widget-user-image */}
                    <h3 className="widget-user-username">Nadia Carmichael</h3>
                    <h5 className="widget-user-desc">Lead Developer</h5>
                  </div>
                  <div className="card-footer p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Projects{" "}
                          <span className="float-right badge bg-primary">
                            31
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Tasks{" "}
                          <span className="float-right badge bg-info">5</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Completed Projects{" "}
                          <span className="float-right badge bg-success">
                            12
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Followers{" "}
                          <span className="float-right badge bg-danger">
                            842
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.widget-user */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* Widget: user widget style 1 */}
                <div className="card card-widget widget-user shadow">
                  {/* Add the bg color to the header using any of the bg-* classes */}
                  <div className="widget-user-header bg-info">
                    <h3 className="widget-user-username">Alexander Pierce</h3>
                    <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                  </div>
                  <div className="widget-user-image">
                    <img
                      className="img-circle elevation-2"
                      src="../dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                    />
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">3,200</h5>
                          <span className="description-text">SALES</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">13,000</h5>
                          <span className="description-text">FOLLOWERS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4">
                        <div className="description-block">
                          <h5 className="description-header">35</h5>
                          <span className="description-text">PRODUCTS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                </div>
                {/* /.widget-user */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* Widget: user widget style 1 */}
                <div className="card card-widget widget-user shadow-lg">
                  {/* Add the bg color to the header using any of the bg-* classes */}
                  <div
                    className="widget-user-header text-white"
                    style={{
                      background: 'url("../dist/img/photo1.png") center center',
                    }}
                  >
                    <h3 className="widget-user-username text-right">
                      Elizabeth Pierce
                    </h3>
                    <h5 className="widget-user-desc text-right">
                      Web Designer
                    </h5>
                  </div>
                  <div className="widget-user-image">
                    <img
                      className="img-circle"
                      src="../dist/img/user3-128x128.jpg"
                      alt="User Avatar"
                    />
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">3,200</h5>
                          <span className="description-text">SALES</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">13,000</h5>
                          <span className="description-text">FOLLOWERS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4">
                        <div className="description-block">
                          <h5 className="description-header">35</h5>
                          <span className="description-text">PRODUCTS</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                </div>
                {/* /.widget-user */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <h5 className="mb-2">Card with Image Overlay</h5>
            <div className="card card-success">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-6 col-xl-4">
                    <div className="card mb-2 bg-gradient-dark">
                      <img
                        className="card-img-top"
                        src="../dist/img/photo1.png"
                        alt="Dist Photo 1"
                      />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title text-primary text-white">
                          Card Title
                        </h5>
                        <p className="card-text text-white pb-2 pt-1">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit sed do eiusmod tempor.
                        </p>
                        <a href="#" className="text-white">
                          Last update 2 mins ago
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-4">
                    <div className="card mb-2">
                      <img
                        className="card-img-top"
                        src="../dist/img/photo2.png"
                        alt="Dist Photo 2"
                      />
                      <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 className="card-title text-white mt-5 pt-2">
                          Card Title
                        </h5>
                        <p className="card-text pb-2 pt-1 text-white">
                          Lorem ipsum dolor sit amet, <br />
                          consectetur adipisicing elit <br />
                          sed do eiusmod tempor.
                        </p>
                        <a href="#" className="text-white">
                          Last update 15 hours ago
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-4">
                    <div className="card mb-2">
                      <img
                        className="card-img-top"
                        src="../dist/img/photo3.jpg"
                        alt="Dist Photo 3"
                      />
                      <div className="card-img-overlay">
                        <h5 className="card-title text-primary">Card Title</h5>
                        <p className="card-text pb-1 pt-1 text-white">
                          Lorem ipsum dolor <br />
                          sit amet, consectetur <br />
                          adipisicing elit sed <br />
                          do eiusmod tempor.{" "}
                        </p>
                        <a href="#" className="text-primary">
                          Last update 3 days ago
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
        <a
          id="back-to-top"
          href="#"
          className="btn btn-primary back-to-top"
          role="button"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up" />
        </a>
      </div>
      {/* /.content-wrapper */}
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.2.0
        </div>
        <strong>
          Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
}

export default widgets;
