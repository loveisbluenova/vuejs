<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">All users</h3>
        </div>
        <!-- /.box-header -->
        
        <div class="box-body table-responsive no-padding">
          
          <table class="table table-hover">
            <tbody>
              <tr>
                <th>ID</th>
                <th>
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                    <div class="input-group-btn">
                      <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                    </div>
                  </div>
                </th>
                <th>Created by</th>
                <th>Modified by</th>
                <th>Type</th>
                <th><button type="button" class="btn btn-success"><i class="fa fa-user-plus"></i> Add user</button></th>
              </tr>
              <tr>
                <td>01</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user4-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Anna Sims</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-info">Administrator</span></td>
                <td>
                  <div class="btn-group">
                  <button type="button" class="btn btn-default">Profile</button>
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Reset Password</a></li>
                    <li><a href="#">Block</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Delete</a></li>
                  </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user1-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Anna Sims<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Anna Sims<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-info">Administrator</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make User</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user3-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make Administrator</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>
                <div class="user-block">
                  <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user8-128x128.jpg" alt="User Image">
                  <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                  <span class="description">Last login - 7:30 PM Today</span>
                 </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-default">Profile</button>
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Make Administrator</a></li>
                    <li><a href="#">Reset Password</a></li>
                    <li><a href="#">Block</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Delete</a></li>
                  </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user5-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make Administrator</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user6-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make Administrator</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>07</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user7-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make Administrator</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>08</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user1-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make Administrator</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>09</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user3-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make Administrator</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>

              <tr>
                <td>10</td>
                <td>
                  <div class="user-block">
                    <img class="img-circle" src="http://fabrika.agency/fb/dist/img/user5-128x128.jpg" alt="User Image">
                    <span class="username"><a href="Profile.html">Jonathan Burke Jr.</a></span>
                    <span class="description">Last login - 7:30 PM Today</span>
                  </div>
                </td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td>Admin<div class="text-muted">1 April 2017 at 6:00PM</div></td>
                <td><span class="label label-primary">User</span></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default">Profile</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Make Administrator</a></li>
                      <li><a href="#">Reset Password</a></li>
                      <li><a href="#">Block</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
          <div class="box-footer clearfix">
            <ul class="pagination pagination-sm no-margin pull-right">
              <li><a href="#">«</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">»</a></li>
            </ul>
          </div>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  created () {

  }
}
</script>
