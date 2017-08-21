<template>
  <div class="row">
    <div class="col-md-12">
    <!-- Custom Tabs -->
      <div class="box">
        <div class="box-body">
          <h3>Books <span data-toggle="tooltip" title="" class="badge bg-green" data-original-title="3 New Messages" aria-describedby="tooltip394092">251</span>
          <button type="button" class="btn btn-success pull-right" data-toggle="modal" data-target="#modalBook"><i class="fa fa-plus"></i> Add book</button></h3>
        </div>
        <div class="box-body">
          <div class="btn-group pull-left">
            <div class="input-group input-group pull-right" style="width: 300px;">
              <div class="input-group-btn">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Filters
                <span class="fa fa-caret-down"></span></button>
                <ul class="dropdown-menu">
                  <li><a href="#">Created by</a></li>
                  <li><a href="#">Created date</a></li>
                  <li><a href="#">Author</a></li>
                  <li><a href="#">Year</a></li>
                </ul>
              </div>
              <input type="text" name="table_search" class="form-control pull-left" placeholder="Search">
              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div> 
          <ul class="pagination pagination no-margin pull-right">
            <li><a href="#">«</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">»</a></li>
          </ul>

        </div>
        <div class="box-body no-padding" style="display: block;">
          <table class="table table-hover">
            <thead>
              <tr>
                <th width="30%">English</th>
                <th>Chinese</th>
                <th>Author</th>
                <th>Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">Shang Han Lun</td>
                <td>傷寒論</td>
                <td>Zhang Zhongjing</td>
                <td>1399</td>
                <td>
                  <div class="btn-group pull-right">
                    <button type="button" class="btn btn-sm btn-default"  data-toggle="modal" data-target="#modalPrepEdit"><i class="fa fa-pencil"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>  
        </div>
        <div class="box-footer">
          <ul class="pagination pagination no-margin pull-right">
            <li><a href="#">«</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">»</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Texts',
  created () {

  }
}
</script>
