package me.cmplayMC.RankGrant.events;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

import me.cmplayMC.RankGrant.Main;
import ru.tehkode.permissions.PermissionUser;
import ru.tehkode.permissions.bukkit.PermissionsEx;

public class ConfiermInvEvent implements Listener {

	@EventHandler
	public void InvenClick(InventoryClickEvent event) {
		Player player = (Player) event.getWhoClicked();

		Inventory open = event.getClickedInventory();
		ItemStack item = event.getCurrentItem();

		if (open == null) {
			return;
		}
		if (open.getName().equals(ChatColor.GOLD + "Confirm")) {
			String Prefix = ChatColor.AQUA + "OmniSky" + ChatColor.GRAY + ">> ";
			Player target = Main.target;
			String Rank = Main.rank;
			String Reson = Main.reson;
			PermissionUser t = PermissionsEx.getUser(target);
			
			event.setCancelled(true);
			
			if (item == null || !item.hasItemMeta()) {
				return;
			}

			if (item.getItemMeta().getDisplayName().equals(ChatColor.GREEN + "Yes")) {
				player.closeInventory();
				if(Main.isleft) {
				    Main.getPermissions().playerAddGroup(null, target, Rank);
					target.sendMessage(Prefix + "You got " + Rank);
					target.sendMessage(Prefix + Reson);
					Main.target = null;
					Main.rank = null;
					Main.reson = null;

				}else {
				t.addGroup(Rank);
				target.sendMessage(Prefix + "You got " + Rank);
				target.sendMessage(Prefix + Reson);
				Main.target = null;
				Main.rank = null;
				Main.reson = null;

				}
			}else if(item.getItemMeta().getDisplayName().equals(ChatColor.RED + "No")) {
				player.closeInventory();
				Main.target = null;
				Main.rank = null;
				Main.reson = null;
			}
			
		 	
		}
	}
	
}
