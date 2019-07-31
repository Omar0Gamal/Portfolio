package me.cmplayMC.RankGrant.events;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

import me.cmplayMC.RankGrant.Main;
import me.cmplayMC.RankGrant.gui.ConfiermGui;

public class SelectResonInvEvent implements Listener {
	
	@EventHandler
	public void InvenClick(InventoryClickEvent event) {
		Player player = (Player) event.getWhoClicked();

		Inventory open = event.getClickedInventory();
		ItemStack item = event.getCurrentItem();

		if (open == null) {
			return;
		}
		if (open.getName().equals(ChatColor.GOLD + "Select Reson")) {
			
			event.setCancelled(true);
			
			if (item == null || !item.hasItemMeta()) {
				return;
			}

			if (item.getItemMeta().getDisplayName().equals(ChatColor.WHITE +"Buying Issues")) {
				player.closeInventory();
				Main.reson = "Error occurred while buying Rank So it had to be given manually.";
				ConfiermGui i = new ConfiermGui();
				i.openInv(player);
			}
			if (item.getItemMeta().getDisplayName().equals(ChatColor.GREEN +"Promotion")) {
				player.closeInventory();
				Main.reson = "You got promoted to a higher Rank.";
				ConfiermGui i = new ConfiermGui();
				i.openInv(player);
			}
			if (item.getItemMeta().getDisplayName().equals(ChatColor.RED +"Demotion")) {
				player.closeInventory();
				Main.reson = "You got Demoted.";
				ConfiermGui i = new ConfiermGui();
				i.openInv(player);
			}
			if (item.getItemMeta().getDisplayName().equals(ChatColor.GOLD +"Other")) {
				player.closeInventory();
				Main.reson = "";
				ConfiermGui i = new ConfiermGui();
				i.openInv(player);
			}
		}
	}

}
