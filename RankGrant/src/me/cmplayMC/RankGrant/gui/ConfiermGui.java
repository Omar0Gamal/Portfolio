package me.cmplayMC.RankGrant.gui;

import java.util.ArrayList;

import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.plugin.Plugin;

import me.cmplayMC.RankGrant.Main;

public class ConfiermGui {

	private Plugin plugin = Main.getPlugin(Main.class);

	@SuppressWarnings("deprecation")
	public void openInv(Player p) {

		String splitter = ChatColor.DARK_GRAY + "+==============+===============+";
		Player target = Main.target;
		String Rank = Main.rank;
		String Reson = Main.reson;
		
		Inventory i = plugin.getServer().createInventory(null, 9,ChatColor.GOLD + "Confirm");
		
		ItemStack Yes = new ItemStack(Material.STAINED_GLASS_PANE, 1, DyeColor.LIME.getWoolData());
		ItemMeta YesMeta = Yes.getItemMeta();
		ArrayList<String> Yeslore = new ArrayList<String>();
		Yeslore.add(splitter);
		Yeslore.add(ChatColor.GOLD + "Click to Confierm");
		Yeslore.add(splitter);
		YesMeta.setLore(Yeslore);
		YesMeta.setDisplayName(ChatColor.GREEN + "Yes");
		Yes.setItemMeta(YesMeta);
		
		ItemStack No = new ItemStack(Material.STAINED_GLASS_PANE, 1, DyeColor.RED.getWoolData());
		ItemMeta NoMeta = Yes.getItemMeta();
		ArrayList<String> Nolore = new ArrayList<String>();
		Nolore.add(splitter);
		Nolore.add(ChatColor.GOLD + "Click to Cancel");
		Nolore.add(splitter);
		NoMeta.setLore(Nolore);
		NoMeta.setDisplayName(ChatColor.RED + "No");
		No.setItemMeta(NoMeta);
		
		ItemStack Player = new ItemStack(Material.SKULL_ITEM ,1);
		ItemMeta PlayerMeta = Player.getItemMeta();
		ArrayList<String> Playerlore = new ArrayList<String>();
		Playerlore.add(splitter);
		Playerlore.add(ChatColor.GOLD + "Player: " + target.getName());
		Playerlore.add(ChatColor.GOLD + "Rank: " + Rank);
		Playerlore.add(ChatColor.GOLD + "Reson: " + Reson);
		Playerlore.add(splitter);
		PlayerMeta.setLore(Playerlore);
		PlayerMeta.setDisplayName(ChatColor.RED + "Info");
		Player.setItemMeta(PlayerMeta);
		
		i.setItem(0, Yes);
		i.setItem(1, Yes);
		i.setItem(2, Yes);
		i.setItem(3, Yes);
		i.setItem(4, Player);
		i.setItem(5, No);
		i.setItem(6, No);
		i.setItem(7, No);
		i.setItem(8, No);
		
		p.openInventory(i);
	}
}
