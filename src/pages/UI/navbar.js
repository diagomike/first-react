import React from "react";

function navbar() {
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
            <a href="../../index3.html" className="nav-link">
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
              data-target="#main-header-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block" id="main-header-search">
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
                    src="../../dist/img/user1-128x128.jpg"
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
                    <p className="text-sm">Call me whenever you can</p>
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
                    src="../../dist/img/user8-128x128.jpg"
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
                    src="../../dist/img/user3-128x128.jpg"
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
        <a href="../../index3.html" className="brand-link">
          <img
            src="../../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="../../dist/img/user2-160x160.jpg"
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
                    <a href="../../index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="../widgets.html" className="nav-link">
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
                    <a href="../layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../layout/fixed-sidebar-custom.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Fixed Sidebar <small>+ Custom Area</small>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-topnav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-footer.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../layout/collapsed-sidebar.html"
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
                    <a href="../charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/uplot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>uPlot</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    UI Elements
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/modals.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Modals &amp; Alerts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/navbar.html" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Navbar &amp; Tabs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/timeline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/ribbons.html" className="nav-link">
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
                    <a href="../forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/validation.html" className="nav-link">
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
                    <a href="../tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="../calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>Gallery</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../kanban.html" className="nav-link">
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
                    <a href="../mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../mailbox/read-mail.html" className="nav-link">
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
                    <a href="../examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/e-commerce.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-add.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/project-edit.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/project-detail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/contact-us.html" className="nav-link">
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
                        <a href="../examples/login.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Login v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/register.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Register v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/forgot-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/recover-password.html"
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
                        <a
                          href="../examples/login-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Login v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/register-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Register v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/forgot-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/recover-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/lockscreen.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/language-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../starter.html" className="nav-link">
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
                    <a href="../search/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Search</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../search/enhanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Enhanced</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="../../iframe.html" className="nav-link">
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
                <h1>
                  Navbar &amp; Tabs
                  <small>new</small>
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Navbar &amp; Tabs</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-edit" />
                      Navbar Examples
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <h4>
                          Default Navbar <small>(navbar-light)</small>
                        </h4>
                        <nav className="navbar navbar-expand navbar-light">
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
                              <a href="../../index3.html" className="nav-link">
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
                                data-target="#navbar-search1"
                                href="#"
                                role="button"
                              >
                                <i className="fas fa-search" />
                              </a>
                              <div
                                className="navbar-search-block"
                                id="navbar-search1"
                              >
                                <form className="form-inline">
                                  <div className="input-group input-group-sm">
                                    <input
                                      className="form-control form-control-navbar"
                                      type="search"
                                      placeholder="Search"
                                      aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-navbar"
                                        type="submit"
                                      >
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
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">
                                  3
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  {/* Message Start */}
                                  <div className="media">
                                    <img
                                      src="../../dist/img/user1-128x128.jpg"
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
                                      <p className="text-sm">
                                        Call me whenever you can
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user8-128x128.jpg"
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
                                      <p className="text-sm">
                                        I got your message bro
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user3-128x128.jpg"
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
                                      <p className="text-sm">
                                        The subject goes here
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
                                      </p>
                                    </div>
                                  </div>
                                  {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
                                  See All Messages
                                </a>
                              </div>
                            </li>
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">
                                  15
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">
                                  15 Notifications
                                </span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-envelope mr-2" /> 4 new
                                  messages
                                  <span className="float-right text-muted text-sm">
                                    3 mins
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-users mr-2" /> 8 friend
                                  requests
                                  <span className="float-right text-muted text-sm">
                                    12 hours
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-file mr-2" /> 3 new
                                  reports
                                  <span className="float-right text-muted text-sm">
                                    2 days
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
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
                      </div>
                      <div className="col-12 col-lg-6">
                        <h4>
                          Default Navbar{" "}
                          <small>(navbar-white navbar-light)</small>
                        </h4>
                        <nav className="navbar navbar-expand navbar-white navbar-light">
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
                              <a href="../../index3.html" className="nav-link">
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
                                data-target="#navbar-search2"
                                href="#"
                                role="button"
                              >
                                <i className="fas fa-search" />
                              </a>
                              <div
                                className="navbar-search-block"
                                id="navbar-search2"
                              >
                                <form className="form-inline">
                                  <div className="input-group input-group-sm">
                                    <input
                                      className="form-control form-control-navbar"
                                      type="search"
                                      placeholder="Search"
                                      aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-navbar"
                                        type="submit"
                                      >
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
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">
                                  3
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  {/* Message Start */}
                                  <div className="media">
                                    <img
                                      src="../../dist/img/user1-128x128.jpg"
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
                                      <p className="text-sm">
                                        Call me whenever you can
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user8-128x128.jpg"
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
                                      <p className="text-sm">
                                        I got your message bro
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user3-128x128.jpg"
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
                                      <p className="text-sm">
                                        The subject goes here
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
                                      </p>
                                    </div>
                                  </div>
                                  {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
                                  See All Messages
                                </a>
                              </div>
                            </li>
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">
                                  15
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">
                                  15 Notifications
                                </span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-envelope mr-2" /> 4 new
                                  messages
                                  <span className="float-right text-muted text-sm">
                                    3 mins
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-users mr-2" /> 8 friend
                                  requests
                                  <span className="float-right text-muted text-sm">
                                    12 hours
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-file mr-2" /> 3 new
                                  reports
                                  <span className="float-right text-muted text-sm">
                                    2 days
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
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
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <h4 className="mt-4">
                          Primary Navbar{" "}
                          <small>
                            <b>recommended</b> (navbar-primary navbar-dark)
                          </small>
                        </h4>
                        <nav className="navbar navbar-expand navbar-primary navbar-dark">
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
                              <a href="../../index3.html" className="nav-link">
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
                                data-target="#navbar-search3"
                                href="#"
                                role="button"
                              >
                                <i className="fas fa-search" />
                              </a>
                              <div
                                className="navbar-search-block"
                                id="navbar-search3"
                              >
                                <form className="form-inline">
                                  <div className="input-group input-group-sm">
                                    <input
                                      className="form-control form-control-navbar"
                                      type="search"
                                      placeholder="Search"
                                      aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-navbar"
                                        type="submit"
                                      >
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
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">
                                  3
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  {/* Message Start */}
                                  <div className="media">
                                    <img
                                      src="../../dist/img/user1-128x128.jpg"
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
                                      <p className="text-sm">
                                        Call me whenever you can
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user8-128x128.jpg"
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
                                      <p className="text-sm">
                                        I got your message bro
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user3-128x128.jpg"
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
                                      <p className="text-sm">
                                        The subject goes here
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
                                      </p>
                                    </div>
                                  </div>
                                  {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
                                  See All Messages
                                </a>
                              </div>
                            </li>
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">
                                  15
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">
                                  15 Notifications
                                </span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-envelope mr-2" /> 4 new
                                  messages
                                  <span className="float-right text-muted text-sm">
                                    3 mins
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-users mr-2" /> 8 friend
                                  requests
                                  <span className="float-right text-muted text-sm">
                                    12 hours
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-file mr-2" /> 3 new
                                  reports
                                  <span className="float-right text-muted text-sm">
                                    2 days
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
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
                      </div>
                      <div className="col-12 col-lg-6">
                        <h4 className="mt-4">
                          Primary Navbar{" "}
                          <small>(navbar-primary navbar-light)</small>
                        </h4>
                        <nav className="navbar navbar-expand navbar-primary navbar-light">
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
                              <a href="../../index3.html" className="nav-link">
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
                                data-target="#navbar-search4"
                                href="#"
                                role="button"
                              >
                                <i className="fas fa-search" />
                              </a>
                              <div
                                className="navbar-search-block"
                                id="navbar-search4"
                              >
                                <form className="form-inline">
                                  <div className="input-group input-group-sm">
                                    <input
                                      className="form-control form-control-navbar"
                                      type="search"
                                      placeholder="Search"
                                      aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-navbar"
                                        type="submit"
                                      >
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
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">
                                  3
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  {/* Message Start */}
                                  <div className="media">
                                    <img
                                      src="../../dist/img/user1-128x128.jpg"
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
                                      <p className="text-sm">
                                        Call me whenever you can
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user8-128x128.jpg"
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
                                      <p className="text-sm">
                                        I got your message bro
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user3-128x128.jpg"
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
                                      <p className="text-sm">
                                        The subject goes here
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
                                      </p>
                                    </div>
                                  </div>
                                  {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
                                  See All Messages
                                </a>
                              </div>
                            </li>
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">
                                  15
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">
                                  15 Notifications
                                </span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-envelope mr-2" /> 4 new
                                  messages
                                  <span className="float-right text-muted text-sm">
                                    3 mins
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-users mr-2" /> 8 friend
                                  requests
                                  <span className="float-right text-muted text-sm">
                                    12 hours
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-file mr-2" /> 3 new
                                  reports
                                  <span className="float-right text-muted text-sm">
                                    2 days
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
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
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <h4 className="mt-4">
                          Orange Navbar{" "}
                          <small>
                            <b>recommended</b> (navbar-orange navbar-light)
                          </small>
                        </h4>
                        <nav className="navbar navbar-expand navbar-orange navbar-light">
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
                              <a href="../../index3.html" className="nav-link">
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
                                data-target="#navbar-search5"
                                href="#"
                                role="button"
                              >
                                <i className="fas fa-search" />
                              </a>
                              <div
                                className="navbar-search-block"
                                id="navbar-search5"
                              >
                                <form className="form-inline">
                                  <div className="input-group input-group-sm">
                                    <input
                                      className="form-control form-control-navbar"
                                      type="search"
                                      placeholder="Search"
                                      aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-navbar"
                                        type="submit"
                                      >
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
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">
                                  3
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  {/* Message Start */}
                                  <div className="media">
                                    <img
                                      src="../../dist/img/user1-128x128.jpg"
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
                                      <p className="text-sm">
                                        Call me whenever you can
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user8-128x128.jpg"
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
                                      <p className="text-sm">
                                        I got your message bro
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user3-128x128.jpg"
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
                                      <p className="text-sm">
                                        The subject goes here
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
                                      </p>
                                    </div>
                                  </div>
                                  {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
                                  See All Messages
                                </a>
                              </div>
                            </li>
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">
                                  15
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">
                                  15 Notifications
                                </span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-envelope mr-2" /> 4 new
                                  messages
                                  <span className="float-right text-muted text-sm">
                                    3 mins
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-users mr-2" /> 8 friend
                                  requests
                                  <span className="float-right text-muted text-sm">
                                    12 hours
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-file mr-2" /> 3 new
                                  reports
                                  <span className="float-right text-muted text-sm">
                                    2 days
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
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
                      </div>
                      <div className="col-12 col-lg-6">
                        <h4 className="mt-4">
                          Orange Navbar{" "}
                          <small>(navbar-orange navbar-dark)</small>
                        </h4>
                        <nav className="navbar navbar-expand navbar-orange navbar-dark">
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
                              <a href="../../index3.html" className="nav-link">
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
                                data-target="#navbar-search6"
                                href="#"
                                role="button"
                              >
                                <i className="fas fa-search" />
                              </a>
                              <div
                                className="navbar-search-block"
                                id="navbar-search6"
                              >
                                <form className="form-inline">
                                  <div className="input-group input-group-sm">
                                    <input
                                      className="form-control form-control-navbar"
                                      type="search"
                                      placeholder="Search"
                                      aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-navbar"
                                        type="submit"
                                      >
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
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">
                                  3
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  {/* Message Start */}
                                  <div className="media">
                                    <img
                                      src="../../dist/img/user1-128x128.jpg"
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
                                      <p className="text-sm">
                                        Call me whenever you can
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user8-128x128.jpg"
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
                                      <p className="text-sm">
                                        I got your message bro
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
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
                                      src="../../dist/img/user3-128x128.jpg"
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
                                      <p className="text-sm">
                                        The subject goes here
                                      </p>
                                      <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4
                                        Hours Ago
                                      </p>
                                    </div>
                                  </div>
                                  {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
                                  See All Messages
                                </a>
                              </div>
                            </li>
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                              >
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">
                                  15
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">
                                  15 Notifications
                                </span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-envelope mr-2" /> 4 new
                                  messages
                                  <span className="float-right text-muted text-sm">
                                    3 mins
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-users mr-2" /> 8 friend
                                  requests
                                  <span className="float-right text-muted text-sm">
                                    12 hours
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="fas fa-file mr-2" /> 3 new
                                  reports
                                  <span className="float-right text-muted text-sm">
                                    2 days
                                  </span>
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  href="#"
                                  className="dropdown-item dropdown-footer"
                                >
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
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* ./row */}
            <div className="row">
              <div className="col-12">
                <h4>
                  Nav Tabs inside Card Header{" "}
                  <small>card-tabs / card-outline-tabs</small>
                </h4>
              </div>
            </div>
            {/* ./row */}
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="card card-primary card-tabs">
                  <div className="card-header p-0 pt-1">
                    <ul
                      className="nav nav-tabs"
                      id="custom-tabs-one-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="custom-tabs-one-home-tab"
                          data-toggle="pill"
                          href="#custom-tabs-one-home"
                          role="tab"
                          aria-controls="custom-tabs-one-home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-one-profile-tab"
                          data-toggle="pill"
                          href="#custom-tabs-one-profile"
                          role="tab"
                          aria-controls="custom-tabs-one-profile"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-one-messages-tab"
                          data-toggle="pill"
                          href="#custom-tabs-one-messages"
                          role="tab"
                          aria-controls="custom-tabs-one-messages"
                          aria-selected="false"
                        >
                          Messages
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-one-settings-tab"
                          data-toggle="pill"
                          href="#custom-tabs-one-settings"
                          role="tab"
                          aria-controls="custom-tabs-one-settings"
                          aria-selected="false"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content"
                      id="custom-tabs-one-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="custom-tabs-one-home"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-home-tab"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin malesuada lacus ullamcorper dui molestie, sit amet
                        congue quam finibus. Etiam ultricies nunc non magna
                        feugiat commodo. Etiam odio magna, mollis auctor felis
                        vitae, ullamcorper ornare ligula. Proin pellentesque
                        tincidunt nisi, vitae ullamcorper felis aliquam id.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Proin id orci eu
                        lectus blandit suscipit. Phasellus porta, ante et varius
                        ornare, sem enim sollicitudin eros, at commodo leo est
                        vitae lacus. Etiam ut porta sem. Proin porttitor porta
                        nisl, id tempor risus rhoncus quis. In in quam a nibh
                        cursus pulvinar non consequat neque. Mauris lacus elit,
                        condimentum ac condimentum at, semper vitae lectus. Cras
                        lacinia erat eget sapien porta consectetur.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-one-profile"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-profile-tab"
                      >
                        Mauris tincidunt mi at erat gravida, eget tristique urna
                        bibendum. Mauris pharetra purus ut ligula tempor, et
                        vulputate metus facilisis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas sollicitudin, nisi a luctus
                        interdum, nisl ligula placerat mi, quis posuere purus
                        ligula eu lectus. Donec nunc tellus, elementum sit amet
                        ultricies at, posuere nec nunc. Nunc euismod
                        pellentesque diam.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-one-messages"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-messages-tab"
                      >
                        Morbi turpis dolor, vulputate vitae felis non, tincidunt
                        congue mauris. Phasellus volutpat augue id mi placerat
                        mollis. Vivamus faucibus eu massa eget condimentum.
                        Fusce nec hendrerit sem, ac tristique nulla. Integer
                        vestibulum orci odio. Cras nec augue ipsum. Suspendisse
                        ut velit condimentum, mattis urna a, malesuada nunc.
                        Curabitur eleifend facilisis velit finibus tristique.
                        Nam vulputate, eros non luctus efficitur, ipsum odio
                        volutpat massa, sit amet sollicitudin est libero sed
                        ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus
                        ipsum gravida arcu, id fermentum metus arcu vel metus.
                        Curabitur eget sem eu risus tincidunt eleifend ac ornare
                        magna.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-one-settings"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-settings-tab"
                      >
                        Pellentesque vestibulum commodo nibh nec blandit.
                        Maecenas neque magna, iaculis tempus turpis ac, ornare
                        sodales tellus. Mauris eget blandit dolor. Quisque
                        tincidunt venenatis vulputate. Morbi euismod molestie
                        tristique. Vestibulum consectetur dolor a vestibulum
                        pharetra. Donec interdum placerat urna nec pharetra.
                        Etiam eget dapibus orci, eget aliquet urna. Nunc at
                        consequat diam. Nunc et felis ut nisl commodo dignissim.
                        In hac habitasse platea dictumst. Praesent imperdiet
                        accumsan ex sit amet facilisis.
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card card-primary card-tabs">
                  <div className="card-header p-0 pt-1">
                    <ul
                      className="nav nav-tabs"
                      id="custom-tabs-two-tab"
                      role="tablist"
                    >
                      <li className="pt-2 px-3">
                        <h3 className="card-title">Card Title</h3>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="custom-tabs-two-home-tab"
                          data-toggle="pill"
                          href="#custom-tabs-two-home"
                          role="tab"
                          aria-controls="custom-tabs-two-home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-two-profile-tab"
                          data-toggle="pill"
                          href="#custom-tabs-two-profile"
                          role="tab"
                          aria-controls="custom-tabs-two-profile"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-two-messages-tab"
                          data-toggle="pill"
                          href="#custom-tabs-two-messages"
                          role="tab"
                          aria-controls="custom-tabs-two-messages"
                          aria-selected="false"
                        >
                          Messages
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-two-settings-tab"
                          data-toggle="pill"
                          href="#custom-tabs-two-settings"
                          role="tab"
                          aria-controls="custom-tabs-two-settings"
                          aria-selected="false"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content"
                      id="custom-tabs-two-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="custom-tabs-two-home"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-two-home-tab"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin malesuada lacus ullamcorper dui molestie, sit amet
                        congue quam finibus. Etiam ultricies nunc non magna
                        feugiat commodo. Etiam odio magna, mollis auctor felis
                        vitae, ullamcorper ornare ligula. Proin pellentesque
                        tincidunt nisi, vitae ullamcorper felis aliquam id.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Proin id orci eu
                        lectus blandit suscipit. Phasellus porta, ante et varius
                        ornare, sem enim sollicitudin eros, at commodo leo est
                        vitae lacus. Etiam ut porta sem. Proin porttitor porta
                        nisl, id tempor risus rhoncus quis. In in quam a nibh
                        cursus pulvinar non consequat neque. Mauris lacus elit,
                        condimentum ac condimentum at, semper vitae lectus. Cras
                        lacinia erat eget sapien porta consectetur.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-two-profile"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-two-profile-tab"
                      >
                        Mauris tincidunt mi at erat gravida, eget tristique urna
                        bibendum. Mauris pharetra purus ut ligula tempor, et
                        vulputate metus facilisis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas sollicitudin, nisi a luctus
                        interdum, nisl ligula placerat mi, quis posuere purus
                        ligula eu lectus. Donec nunc tellus, elementum sit amet
                        ultricies at, posuere nec nunc. Nunc euismod
                        pellentesque diam.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-two-messages"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-two-messages-tab"
                      >
                        Morbi turpis dolor, vulputate vitae felis non, tincidunt
                        congue mauris. Phasellus volutpat augue id mi placerat
                        mollis. Vivamus faucibus eu massa eget condimentum.
                        Fusce nec hendrerit sem, ac tristique nulla. Integer
                        vestibulum orci odio. Cras nec augue ipsum. Suspendisse
                        ut velit condimentum, mattis urna a, malesuada nunc.
                        Curabitur eleifend facilisis velit finibus tristique.
                        Nam vulputate, eros non luctus efficitur, ipsum odio
                        volutpat massa, sit amet sollicitudin est libero sed
                        ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus
                        ipsum gravida arcu, id fermentum metus arcu vel metus.
                        Curabitur eget sem eu risus tincidunt eleifend ac ornare
                        magna.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-two-settings"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-two-settings-tab"
                      >
                        Pellentesque vestibulum commodo nibh nec blandit.
                        Maecenas neque magna, iaculis tempus turpis ac, ornare
                        sodales tellus. Mauris eget blandit dolor. Quisque
                        tincidunt venenatis vulputate. Morbi euismod molestie
                        tristique. Vestibulum consectetur dolor a vestibulum
                        pharetra. Donec interdum placerat urna nec pharetra.
                        Etiam eget dapibus orci, eget aliquet urna. Nunc at
                        consequat diam. Nunc et felis ut nisl commodo dignissim.
                        In hac habitasse platea dictumst. Praesent imperdiet
                        accumsan ex sit amet facilisis.
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="card card-primary card-outline card-tabs">
                  <div className="card-header p-0 pt-1 border-bottom-0">
                    <ul
                      className="nav nav-tabs"
                      id="custom-tabs-three-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="custom-tabs-three-home-tab"
                          data-toggle="pill"
                          href="#custom-tabs-three-home"
                          role="tab"
                          aria-controls="custom-tabs-three-home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-three-profile-tab"
                          data-toggle="pill"
                          href="#custom-tabs-three-profile"
                          role="tab"
                          aria-controls="custom-tabs-three-profile"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-three-messages-tab"
                          data-toggle="pill"
                          href="#custom-tabs-three-messages"
                          role="tab"
                          aria-controls="custom-tabs-three-messages"
                          aria-selected="false"
                        >
                          Messages
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-three-settings-tab"
                          data-toggle="pill"
                          href="#custom-tabs-three-settings"
                          role="tab"
                          aria-controls="custom-tabs-three-settings"
                          aria-selected="false"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content"
                      id="custom-tabs-three-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="custom-tabs-three-home"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-three-home-tab"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin malesuada lacus ullamcorper dui molestie, sit amet
                        congue quam finibus. Etiam ultricies nunc non magna
                        feugiat commodo. Etiam odio magna, mollis auctor felis
                        vitae, ullamcorper ornare ligula. Proin pellentesque
                        tincidunt nisi, vitae ullamcorper felis aliquam id.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Proin id orci eu
                        lectus blandit suscipit. Phasellus porta, ante et varius
                        ornare, sem enim sollicitudin eros, at commodo leo est
                        vitae lacus. Etiam ut porta sem. Proin porttitor porta
                        nisl, id tempor risus rhoncus quis. In in quam a nibh
                        cursus pulvinar non consequat neque. Mauris lacus elit,
                        condimentum ac condimentum at, semper vitae lectus. Cras
                        lacinia erat eget sapien porta consectetur.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-three-profile"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-three-profile-tab"
                      >
                        Mauris tincidunt mi at erat gravida, eget tristique urna
                        bibendum. Mauris pharetra purus ut ligula tempor, et
                        vulputate metus facilisis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas sollicitudin, nisi a luctus
                        interdum, nisl ligula placerat mi, quis posuere purus
                        ligula eu lectus. Donec nunc tellus, elementum sit amet
                        ultricies at, posuere nec nunc. Nunc euismod
                        pellentesque diam.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-three-messages"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-three-messages-tab"
                      >
                        Morbi turpis dolor, vulputate vitae felis non, tincidunt
                        congue mauris. Phasellus volutpat augue id mi placerat
                        mollis. Vivamus faucibus eu massa eget condimentum.
                        Fusce nec hendrerit sem, ac tristique nulla. Integer
                        vestibulum orci odio. Cras nec augue ipsum. Suspendisse
                        ut velit condimentum, mattis urna a, malesuada nunc.
                        Curabitur eleifend facilisis velit finibus tristique.
                        Nam vulputate, eros non luctus efficitur, ipsum odio
                        volutpat massa, sit amet sollicitudin est libero sed
                        ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus
                        ipsum gravida arcu, id fermentum metus arcu vel metus.
                        Curabitur eget sem eu risus tincidunt eleifend ac ornare
                        magna.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-three-settings"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-three-settings-tab"
                      >
                        Pellentesque vestibulum commodo nibh nec blandit.
                        Maecenas neque magna, iaculis tempus turpis ac, ornare
                        sodales tellus. Mauris eget blandit dolor. Quisque
                        tincidunt venenatis vulputate. Morbi euismod molestie
                        tristique. Vestibulum consectetur dolor a vestibulum
                        pharetra. Donec interdum placerat urna nec pharetra.
                        Etiam eget dapibus orci, eget aliquet urna. Nunc at
                        consequat diam. Nunc et felis ut nisl commodo dignissim.
                        In hac habitasse platea dictumst. Praesent imperdiet
                        accumsan ex sit amet facilisis.
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card card-primary card-outline card-outline-tabs">
                  <div className="card-header p-0 border-bottom-0">
                    <ul
                      className="nav nav-tabs"
                      id="custom-tabs-four-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="custom-tabs-four-home-tab"
                          data-toggle="pill"
                          href="#custom-tabs-four-home"
                          role="tab"
                          aria-controls="custom-tabs-four-home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-four-profile-tab"
                          data-toggle="pill"
                          href="#custom-tabs-four-profile"
                          role="tab"
                          aria-controls="custom-tabs-four-profile"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-four-messages-tab"
                          data-toggle="pill"
                          href="#custom-tabs-four-messages"
                          role="tab"
                          aria-controls="custom-tabs-four-messages"
                          aria-selected="false"
                        >
                          Messages
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-four-settings-tab"
                          data-toggle="pill"
                          href="#custom-tabs-four-settings"
                          role="tab"
                          aria-controls="custom-tabs-four-settings"
                          aria-selected="false"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content"
                      id="custom-tabs-four-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="custom-tabs-four-home"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-four-home-tab"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin malesuada lacus ullamcorper dui molestie, sit amet
                        congue quam finibus. Etiam ultricies nunc non magna
                        feugiat commodo. Etiam odio magna, mollis auctor felis
                        vitae, ullamcorper ornare ligula. Proin pellentesque
                        tincidunt nisi, vitae ullamcorper felis aliquam id.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Proin id orci eu
                        lectus blandit suscipit. Phasellus porta, ante et varius
                        ornare, sem enim sollicitudin eros, at commodo leo est
                        vitae lacus. Etiam ut porta sem. Proin porttitor porta
                        nisl, id tempor risus rhoncus quis. In in quam a nibh
                        cursus pulvinar non consequat neque. Mauris lacus elit,
                        condimentum ac condimentum at, semper vitae lectus. Cras
                        lacinia erat eget sapien porta consectetur.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-four-profile"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-four-profile-tab"
                      >
                        Mauris tincidunt mi at erat gravida, eget tristique urna
                        bibendum. Mauris pharetra purus ut ligula tempor, et
                        vulputate metus facilisis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas sollicitudin, nisi a luctus
                        interdum, nisl ligula placerat mi, quis posuere purus
                        ligula eu lectus. Donec nunc tellus, elementum sit amet
                        ultricies at, posuere nec nunc. Nunc euismod
                        pellentesque diam.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-four-messages"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-four-messages-tab"
                      >
                        Morbi turpis dolor, vulputate vitae felis non, tincidunt
                        congue mauris. Phasellus volutpat augue id mi placerat
                        mollis. Vivamus faucibus eu massa eget condimentum.
                        Fusce nec hendrerit sem, ac tristique nulla. Integer
                        vestibulum orci odio. Cras nec augue ipsum. Suspendisse
                        ut velit condimentum, mattis urna a, malesuada nunc.
                        Curabitur eleifend facilisis velit finibus tristique.
                        Nam vulputate, eros non luctus efficitur, ipsum odio
                        volutpat massa, sit amet sollicitudin est libero sed
                        ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus
                        ipsum gravida arcu, id fermentum metus arcu vel metus.
                        Curabitur eget sem eu risus tincidunt eleifend ac ornare
                        magna.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-four-settings"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-four-settings-tab"
                      >
                        Pellentesque vestibulum commodo nibh nec blandit.
                        Maecenas neque magna, iaculis tempus turpis ac, ornare
                        sodales tellus. Mauris eget blandit dolor. Quisque
                        tincidunt venenatis vulputate. Morbi euismod molestie
                        tristique. Vestibulum consectetur dolor a vestibulum
                        pharetra. Donec interdum placerat urna nec pharetra.
                        Etiam eget dapibus orci, eget aliquet urna. Nunc at
                        consequat diam. Nunc et felis ut nisl commodo dignissim.
                        In hac habitasse platea dictumst. Praesent imperdiet
                        accumsan ex sit amet facilisis.
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Nav Tabs Overlay for loading</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary card-tabs">
                  <div className="card-header p-0 pt-1">
                    <ul
                      className="nav nav-tabs"
                      id="custom-tabs-five-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="custom-tabs-five-overlay-tab"
                          data-toggle="pill"
                          href="#custom-tabs-five-overlay"
                          role="tab"
                          aria-controls="custom-tabs-five-overlay"
                          aria-selected="true"
                        >
                          Overlay
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-five-overlay-dark-tab"
                          data-toggle="pill"
                          href="#custom-tabs-five-overlay-dark"
                          role="tab"
                          aria-controls="custom-tabs-five-overlay-dark"
                          aria-selected="false"
                        >
                          Overlay Dark
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="custom-tabs-five-normal-tab"
                          data-toggle="pill"
                          href="#custom-tabs-five-normal"
                          role="tab"
                          aria-controls="custom-tabs-five-normal"
                          aria-selected="false"
                        >
                          Normal Tab
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content"
                      id="custom-tabs-five-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="custom-tabs-five-overlay"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-five-overlay-tab"
                      >
                        <div className="overlay-wrapper">
                          <div className="overlay">
                            <i className="fas fa-3x fa-sync-alt fa-spin" />
                            <div className="text-bold pt-2">Loading...</div>
                          </div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin malesuada lacus ullamcorper dui molestie,
                          sit amet congue quam finibus. Etiam ultricies nunc non
                          magna feugiat commodo. Etiam odio magna, mollis auctor
                          felis vitae, ullamcorper ornare ligula. Proin
                          pellentesque tincidunt nisi, vitae ullamcorper felis
                          aliquam id. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Proin id orci eu lectus blandit suscipit.
                          Phasellus porta, ante et varius ornare, sem enim
                          sollicitudin eros, at commodo leo est vitae lacus.
                          Etiam ut porta sem. Proin porttitor porta nisl, id
                          tempor risus rhoncus quis. In in quam a nibh cursus
                          pulvinar non consequat neque. Mauris lacus elit,
                          condimentum ac condimentum at, semper vitae lectus.
                          Cras lacinia erat eget sapien porta consectetur.
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-five-overlay-dark"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-five-overlay-dark-tab"
                      >
                        <div className="overlay-wrapper">
                          <div className="overlay dark">
                            <i className="fas fa-3x fa-sync-alt fa-spin" />
                            <div className="text-bold pt-2">Loading...</div>
                          </div>
                          Pellentesque vestibulum commodo nibh nec blandit.
                          Maecenas neque magna, iaculis tempus turpis ac, ornare
                          sodales tellus. Mauris eget blandit dolor. Quisque
                          tincidunt venenatis vulputate. Morbi euismod molestie
                          tristique. Vestibulum consectetur dolor a vestibulum
                          pharetra. Donec interdum placerat urna nec pharetra.
                          Etiam eget dapibus orci, eget aliquet urna. Nunc at
                          consequat diam. Nunc et felis ut nisl commodo
                          dignissim. In hac habitasse platea dictumst. Praesent
                          imperdiet accumsan ex sit amet facilisis.
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-tabs-five-normal"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-five-normal-tab"
                      >
                        Mauris tincidunt mi at erat gravida, eget tristique urna
                        bibendum. Mauris pharetra purus ut ligula tempor, et
                        vulputate metus facilisis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas sollicitudin, nisi a luctus
                        interdum, nisl ligula placerat mi, quis posuere purus
                        ligula eu lectus. Donec nunc tellus, elementum sit amet
                        ultricies at, posuere nec nunc. Nunc euismod
                        pellentesque diam.
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
            </div>
            {/* /.row */}
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-edit" />
                  Vertical Tabs Examples
                </h3>
              </div>
              <div className="card-body">
                <h4>Left Sided</h4>
                <div className="row">
                  <div className="col-5 col-sm-3">
                    <div
                      className="nav flex-column nav-tabs h-100"
                      id="vert-tabs-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link active"
                        id="vert-tabs-home-tab"
                        data-toggle="pill"
                        href="#vert-tabs-home"
                        role="tab"
                        aria-controls="vert-tabs-home"
                        aria-selected="true"
                      >
                        Home
                      </a>
                      <a
                        className="nav-link"
                        id="vert-tabs-profile-tab"
                        data-toggle="pill"
                        href="#vert-tabs-profile"
                        role="tab"
                        aria-controls="vert-tabs-profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                      <a
                        className="nav-link"
                        id="vert-tabs-messages-tab"
                        data-toggle="pill"
                        href="#vert-tabs-messages"
                        role="tab"
                        aria-controls="vert-tabs-messages"
                        aria-selected="false"
                      >
                        Messages
                      </a>
                      <a
                        className="nav-link"
                        id="vert-tabs-settings-tab"
                        data-toggle="pill"
                        href="#vert-tabs-settings"
                        role="tab"
                        aria-controls="vert-tabs-settings"
                        aria-selected="false"
                      >
                        Settings
                      </a>
                    </div>
                  </div>
                  <div className="col-7 col-sm-9">
                    <div className="tab-content" id="vert-tabs-tabContent">
                      <div
                        className="tab-pane text-left fade show active"
                        id="vert-tabs-home"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-home-tab"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin malesuada lacus ullamcorper dui molestie, sit amet
                        congue quam finibus. Etiam ultricies nunc non magna
                        feugiat commodo. Etiam odio magna, mollis auctor felis
                        vitae, ullamcorper ornare ligula. Proin pellentesque
                        tincidunt nisi, vitae ullamcorper felis aliquam id.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Proin id orci eu
                        lectus blandit suscipit. Phasellus porta, ante et varius
                        ornare, sem enim sollicitudin eros, at commodo leo est
                        vitae lacus. Etiam ut porta sem. Proin porttitor porta
                        nisl, id tempor risus rhoncus quis. In in quam a nibh
                        cursus pulvinar non consequat neque. Mauris lacus elit,
                        condimentum ac condimentum at, semper vitae lectus. Cras
                        lacinia erat eget sapien porta consectetur.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="vert-tabs-profile"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-profile-tab"
                      >
                        Mauris tincidunt mi at erat gravida, eget tristique urna
                        bibendum. Mauris pharetra purus ut ligula tempor, et
                        vulputate metus facilisis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas sollicitudin, nisi a luctus
                        interdum, nisl ligula placerat mi, quis posuere purus
                        ligula eu lectus. Donec nunc tellus, elementum sit amet
                        ultricies at, posuere nec nunc. Nunc euismod
                        pellentesque diam.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="vert-tabs-messages"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-messages-tab"
                      >
                        Morbi turpis dolor, vulputate vitae felis non, tincidunt
                        congue mauris. Phasellus volutpat augue id mi placerat
                        mollis. Vivamus faucibus eu massa eget condimentum.
                        Fusce nec hendrerit sem, ac tristique nulla. Integer
                        vestibulum orci odio. Cras nec augue ipsum. Suspendisse
                        ut velit condimentum, mattis urna a, malesuada nunc.
                        Curabitur eleifend facilisis velit finibus tristique.
                        Nam vulputate, eros non luctus efficitur, ipsum odio
                        volutpat massa, sit amet sollicitudin est libero sed
                        ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus
                        ipsum gravida arcu, id fermentum metus arcu vel metus.
                        Curabitur eget sem eu risus tincidunt eleifend ac ornare
                        magna.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="vert-tabs-settings"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-settings-tab"
                      >
                        Pellentesque vestibulum commodo nibh nec blandit.
                        Maecenas neque magna, iaculis tempus turpis ac, ornare
                        sodales tellus. Mauris eget blandit dolor. Quisque
                        tincidunt venenatis vulputate. Morbi euismod molestie
                        tristique. Vestibulum consectetur dolor a vestibulum
                        pharetra. Donec interdum placerat urna nec pharetra.
                        Etiam eget dapibus orci, eget aliquet urna. Nunc at
                        consequat diam. Nunc et felis ut nisl commodo dignissim.
                        In hac habitasse platea dictumst. Praesent imperdiet
                        accumsan ex sit amet facilisis.
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="mt-4">
                  Right Sided <small>(nav-tabs-right)</small>
                </h4>
                <div className="row">
                  <div className="col-7 col-sm-9">
                    <div
                      className="tab-content"
                      id="vert-tabs-right-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="vert-tabs-right-home"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-right-home-tab"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin malesuada lacus ullamcorper dui molestie, sit amet
                        congue quam finibus. Etiam ultricies nunc non magna
                        feugiat commodo. Etiam odio magna, mollis auctor felis
                        vitae, ullamcorper ornare ligula. Proin pellentesque
                        tincidunt nisi, vitae ullamcorper felis aliquam id.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Proin id orci eu
                        lectus blandit suscipit. Phasellus porta, ante et varius
                        ornare, sem enim sollicitudin eros, at commodo leo est
                        vitae lacus. Etiam ut porta sem. Proin porttitor porta
                        nisl, id tempor risus rhoncus quis. In in quam a nibh
                        cursus pulvinar non consequat neque. Mauris lacus elit,
                        condimentum ac condimentum at, semper vitae lectus. Cras
                        lacinia erat eget sapien porta consectetur.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="vert-tabs-right-profile"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-right-profile-tab"
                      >
                        Mauris tincidunt mi at erat gravida, eget tristique urna
                        bibendum. Mauris pharetra purus ut ligula tempor, et
                        vulputate metus facilisis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas sollicitudin, nisi a luctus
                        interdum, nisl ligula placerat mi, quis posuere purus
                        ligula eu lectus. Donec nunc tellus, elementum sit amet
                        ultricies at, posuere nec nunc. Nunc euismod
                        pellentesque diam.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="vert-tabs-right-messages"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-right-messages-tab"
                      >
                        Morbi turpis dolor, vulputate vitae felis non, tincidunt
                        congue mauris. Phasellus volutpat augue id mi placerat
                        mollis. Vivamus faucibus eu massa eget condimentum.
                        Fusce nec hendrerit sem, ac tristique nulla. Integer
                        vestibulum orci odio. Cras nec augue ipsum. Suspendisse
                        ut velit condimentum, mattis urna a, malesuada nunc.
                        Curabitur eleifend facilisis velit finibus tristique.
                        Nam vulputate, eros non luctus efficitur, ipsum odio
                        volutpat massa, sit amet sollicitudin est libero sed
                        ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus
                        ipsum gravida arcu, id fermentum metus arcu vel metus.
                        Curabitur eget sem eu risus tincidunt eleifend ac ornare
                        magna.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="vert-tabs-right-settings"
                        role="tabpanel"
                        aria-labelledby="vert-tabs-right-settings-tab"
                      >
                        Pellentesque vestibulum commodo nibh nec blandit.
                        Maecenas neque magna, iaculis tempus turpis ac, ornare
                        sodales tellus. Mauris eget blandit dolor. Quisque
                        tincidunt venenatis vulputate. Morbi euismod molestie
                        tristique. Vestibulum consectetur dolor a vestibulum
                        pharetra. Donec interdum placerat urna nec pharetra.
                        Etiam eget dapibus orci, eget aliquet urna. Nunc at
                        consequat diam. Nunc et felis ut nisl commodo dignissim.
                        In hac habitasse platea dictumst. Praesent imperdiet
                        accumsan ex sit amet facilisis.
                      </div>
                    </div>
                  </div>
                  <div className="col-5 col-sm-3">
                    <div
                      className="nav flex-column nav-tabs nav-tabs-right h-100"
                      id="vert-tabs-right-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link active"
                        id="vert-tabs-right-home-tab"
                        data-toggle="pill"
                        href="#vert-tabs-right-home"
                        role="tab"
                        aria-controls="vert-tabs-right-home"
                        aria-selected="true"
                      >
                        Home
                      </a>
                      <a
                        className="nav-link"
                        id="vert-tabs-right-profile-tab"
                        data-toggle="pill"
                        href="#vert-tabs-right-profile"
                        role="tab"
                        aria-controls="vert-tabs-right-profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                      <a
                        className="nav-link"
                        id="vert-tabs-right-messages-tab"
                        data-toggle="pill"
                        href="#vert-tabs-right-messages"
                        role="tab"
                        aria-controls="vert-tabs-right-messages"
                        aria-selected="false"
                      >
                        Messages
                      </a>
                      <a
                        className="nav-link"
                        id="vert-tabs-right-settings-tab"
                        data-toggle="pill"
                        href="#vert-tabs-right-settings"
                        role="tab"
                        aria-controls="vert-tabs-right-settings"
                        aria-selected="false"
                      >
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card */}
            </div>
            {/* /.card */}
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-edit" />
                  Tabs Custom Content Examples
                </h3>
              </div>
              <div className="card-body">
                <h4>Custom Content Below</h4>
                <ul
                  className="nav nav-tabs"
                  id="custom-content-below-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="custom-content-below-home-tab"
                      data-toggle="pill"
                      href="#custom-content-below-home"
                      role="tab"
                      aria-controls="custom-content-below-home"
                      aria-selected="true"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-content-below-profile-tab"
                      data-toggle="pill"
                      href="#custom-content-below-profile"
                      role="tab"
                      aria-controls="custom-content-below-profile"
                      aria-selected="false"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-content-below-messages-tab"
                      data-toggle="pill"
                      href="#custom-content-below-messages"
                      role="tab"
                      aria-controls="custom-content-below-messages"
                      aria-selected="false"
                    >
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-content-below-settings-tab"
                      data-toggle="pill"
                      href="#custom-content-below-settings"
                      role="tab"
                      aria-controls="custom-content-below-settings"
                      aria-selected="false"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                <div
                  className="tab-content"
                  id="custom-content-below-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="custom-content-below-home"
                    role="tabpanel"
                    aria-labelledby="custom-content-below-home-tab"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin malesuada lacus ullamcorper dui molestie, sit amet
                    congue quam finibus. Etiam ultricies nunc non magna feugiat
                    commodo. Etiam odio magna, mollis auctor felis vitae,
                    ullamcorper ornare ligula. Proin pellentesque tincidunt
                    nisi, vitae ullamcorper felis aliquam id. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Proin id orci eu lectus blandit
                    suscipit. Phasellus porta, ante et varius ornare, sem enim
                    sollicitudin eros, at commodo leo est vitae lacus. Etiam ut
                    porta sem. Proin porttitor porta nisl, id tempor risus
                    rhoncus quis. In in quam a nibh cursus pulvinar non
                    consequat neque. Mauris lacus elit, condimentum ac
                    condimentum at, semper vitae lectus. Cras lacinia erat eget
                    sapien porta consectetur.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-content-below-profile"
                    role="tabpanel"
                    aria-labelledby="custom-content-below-profile-tab"
                  >
                    Mauris tincidunt mi at erat gravida, eget tristique urna
                    bibendum. Mauris pharetra purus ut ligula tempor, et
                    vulputate metus facilisis. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Maecenas sollicitudin, nisi a luctus interdum, nisl ligula
                    placerat mi, quis posuere purus ligula eu lectus. Donec nunc
                    tellus, elementum sit amet ultricies at, posuere nec nunc.
                    Nunc euismod pellentesque diam.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-content-below-messages"
                    role="tabpanel"
                    aria-labelledby="custom-content-below-messages-tab"
                  >
                    Morbi turpis dolor, vulputate vitae felis non, tincidunt
                    congue mauris. Phasellus volutpat augue id mi placerat
                    mollis. Vivamus faucibus eu massa eget condimentum. Fusce
                    nec hendrerit sem, ac tristique nulla. Integer vestibulum
                    orci odio. Cras nec augue ipsum. Suspendisse ut velit
                    condimentum, mattis urna a, malesuada nunc. Curabitur
                    eleifend facilisis velit finibus tristique. Nam vulputate,
                    eros non luctus efficitur, ipsum odio volutpat massa, sit
                    amet sollicitudin est libero sed ipsum. Nulla lacinia, ex
                    vitae gravida fermentum, lectus ipsum gravida arcu, id
                    fermentum metus arcu vel metus. Curabitur eget sem eu risus
                    tincidunt eleifend ac ornare magna.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-content-below-settings"
                    role="tabpanel"
                    aria-labelledby="custom-content-below-settings-tab"
                  >
                    Pellentesque vestibulum commodo nibh nec blandit. Maecenas
                    neque magna, iaculis tempus turpis ac, ornare sodales
                    tellus. Mauris eget blandit dolor. Quisque tincidunt
                    venenatis vulputate. Morbi euismod molestie tristique.
                    Vestibulum consectetur dolor a vestibulum pharetra. Donec
                    interdum placerat urna nec pharetra. Etiam eget dapibus
                    orci, eget aliquet urna. Nunc at consequat diam. Nunc et
                    felis ut nisl commodo dignissim. In hac habitasse platea
                    dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
                <div className="tab-custom-content">
                  <p className="lead mb-0">Custom Content goes here</p>
                </div>
                <h4 className="mt-5 ">Custom Content Above</h4>
                <ul
                  className="nav nav-tabs"
                  id="custom-content-above-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="custom-content-above-home-tab"
                      data-toggle="pill"
                      href="#custom-content-above-home"
                      role="tab"
                      aria-controls="custom-content-above-home"
                      aria-selected="true"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-content-above-profile-tab"
                      data-toggle="pill"
                      href="#custom-content-above-profile"
                      role="tab"
                      aria-controls="custom-content-above-profile"
                      aria-selected="false"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-content-above-messages-tab"
                      data-toggle="pill"
                      href="#custom-content-above-messages"
                      role="tab"
                      aria-controls="custom-content-above-messages"
                      aria-selected="false"
                    >
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="custom-content-above-settings-tab"
                      data-toggle="pill"
                      href="#custom-content-above-settings"
                      role="tab"
                      aria-controls="custom-content-above-settings"
                      aria-selected="false"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                <div className="tab-custom-content">
                  <p className="lead mb-0">Custom Content goes here</p>
                </div>
                <div
                  className="tab-content"
                  id="custom-content-above-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="custom-content-above-home"
                    role="tabpanel"
                    aria-labelledby="custom-content-above-home-tab"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin malesuada lacus ullamcorper dui molestie, sit amet
                    congue quam finibus. Etiam ultricies nunc non magna feugiat
                    commodo. Etiam odio magna, mollis auctor felis vitae,
                    ullamcorper ornare ligula. Proin pellentesque tincidunt
                    nisi, vitae ullamcorper felis aliquam id. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Proin id orci eu lectus blandit
                    suscipit. Phasellus porta, ante et varius ornare, sem enim
                    sollicitudin eros, at commodo leo est vitae lacus. Etiam ut
                    porta sem. Proin porttitor porta nisl, id tempor risus
                    rhoncus quis. In in quam a nibh cursus pulvinar non
                    consequat neque. Mauris lacus elit, condimentum ac
                    condimentum at, semper vitae lectus. Cras lacinia erat eget
                    sapien porta consectetur.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-content-above-profile"
                    role="tabpanel"
                    aria-labelledby="custom-content-above-profile-tab"
                  >
                    Mauris tincidunt mi at erat gravida, eget tristique urna
                    bibendum. Mauris pharetra purus ut ligula tempor, et
                    vulputate metus facilisis. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Maecenas sollicitudin, nisi a luctus interdum, nisl ligula
                    placerat mi, quis posuere purus ligula eu lectus. Donec nunc
                    tellus, elementum sit amet ultricies at, posuere nec nunc.
                    Nunc euismod pellentesque diam.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-content-above-messages"
                    role="tabpanel"
                    aria-labelledby="custom-content-above-messages-tab"
                  >
                    Morbi turpis dolor, vulputate vitae felis non, tincidunt
                    congue mauris. Phasellus volutpat augue id mi placerat
                    mollis. Vivamus faucibus eu massa eget condimentum. Fusce
                    nec hendrerit sem, ac tristique nulla. Integer vestibulum
                    orci odio. Cras nec augue ipsum. Suspendisse ut velit
                    condimentum, mattis urna a, malesuada nunc. Curabitur
                    eleifend facilisis velit finibus tristique. Nam vulputate,
                    eros non luctus efficitur, ipsum odio volutpat massa, sit
                    amet sollicitudin est libero sed ipsum. Nulla lacinia, ex
                    vitae gravida fermentum, lectus ipsum gravida arcu, id
                    fermentum metus arcu vel metus. Curabitur eget sem eu risus
                    tincidunt eleifend ac ornare magna.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-content-above-settings"
                    role="tabpanel"
                    aria-labelledby="custom-content-above-settings-tab"
                  >
                    Pellentesque vestibulum commodo nibh nec blandit. Maecenas
                    neque magna, iaculis tempus turpis ac, ornare sodales
                    tellus. Mauris eget blandit dolor. Quisque tincidunt
                    venenatis vulputate. Morbi euismod molestie tristique.
                    Vestibulum consectetur dolor a vestibulum pharetra. Donec
                    interdum placerat urna nec pharetra. Etiam eget dapibus
                    orci, eget aliquet urna. Nunc at consequat diam. Nunc et
                    felis ut nisl commodo dignissim. In hac habitasse platea
                    dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
              {/* /.card */}
            </div>
            {/* /.card */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
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

export default navbar;
