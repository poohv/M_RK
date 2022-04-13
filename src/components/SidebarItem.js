import React from "react";

function SidebarItem({ menu }) {
  return (
    <li class="nav-item">
    <a class="nav-link">
      <i class="nav-icon fas fa-tachometer-alt"></i>
      <p>
        {menu.name}
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item">
        <a class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>  {menu.name}</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>  {menu.name}</p>
        </a>
      </li>
      <li class="nav-item" id="test1">
        <a class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>  {menu.name}</p>
        </a>
      </li>
    </ul>
  </li>
  );
}

export default SidebarItem;