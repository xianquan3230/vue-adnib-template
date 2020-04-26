<template >
  <div class="app-container"  id="profile">
    <el-table
      :data="tableData"
      style="width:100%;margin-bottom:20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children:'children',hasChildren:'hasChildren'}"
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180"
      />
      <!--<template slot-scope="scope">
      <el-popover trigger="hover" placement="top">
        <p>姓名: {{ scope.row.name }}</p>
        <p>住址: {{ scope.row.address }}</p>
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.name }}</el-tag>
        </div>
      </el-popover>
    </template>-->
      <el-table-column
        prop="address"
        label="地址"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button 
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div >
</template>
<script src="../../js/porfile.js"></script>
<style scoped>
</style>
