package me.cmplayMC.RankGrant.events;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

import me.cmplayMC.RankGrant.Main;
import me.cmplayMC.RankGrant.gui.SelectResonGui;

public class SelectRankInvEvent implements Listener{
	
	@EventHandler
	public void InvenClick(InventoryClickEvent event) {
		Player player = (Player) event.getWhoClicked();

		Inventory open = event.getClickedInventory();
		ItemStack item = event.getCurrentItem();

		if (open == null) {
			return;
		}
		if (open.getName().equals(ChatColor.GOLD + "Select Rank")) {
			
			event.setCancelled(true);
			
			if (item == null || !item.hasItemMeta()) {
				return;
			}

			if (item.getItemMeta().getDisplayName().equals(ChatColor.GREEN +"Member")) {
				player.closeInventory();
				Main.rank = "Member";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}

			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.AQUA + "Elite")) {
				player.closeInventory();
				Main.rank = "Elite";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
				
				
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.LIGHT_PURPLE + "Hero")) {
				player.closeInventory();
				Main.rank = "Hero";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
				
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.GOLD + "Legend")) {
				player.closeInventory();
				Main.rank = "Legend";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
				
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.DARK_PURPLE + "EnderGod")) {
				player.closeInventory();
				Main.rank = "EnderGod";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
				
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.LIGHT_PURPLE + "Helper")) {
				player.closeInventory();
				Main.rank = "Helper";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
				
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.AQUA + "Mod")) {
				player.closeInventory();
				Main.rank = "Mod";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.BLUE + "Sr_Mod")) {
				player.closeInventory();
				Main.rank = "Sr_Mod";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.YELLOW + "Admin")) {
				player.closeInventory();
				Main.rank = "Admin";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.DARK_RED + "Sr_Admin")) {
				player.closeInventory();
				Main.rank = "Sr_Admin";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.GRAY + "Head_Admin")) {
				player.closeInventory();
				Main.rank = "Head_Admin";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.WHITE + "StaffManeger")) {
				player.closeInventory();
				Main.rank = "StaffManeger";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.RED + "ServerAdmin")) {
				player.closeInventory();
				Main.rank = "ServerAdmin";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.BLACK + "Owner")) {
				player.closeInventory();
				Main.rank = "Owner";
				SelectResonGui i = new SelectResonGui();
				i.openInv(player);
				if(event.getClick().isLeftClick()) {
					Main.isleft = true;
				}else {
					Main.isleft = false;
				}
			}
		}

	}


}
