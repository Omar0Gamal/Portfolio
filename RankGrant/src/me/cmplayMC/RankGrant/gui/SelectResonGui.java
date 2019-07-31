package me.cmplayMC.RankGrant.gui;

import java.util.ArrayList;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.plugin.Plugin;

import me.cmplayMC.RankGrant.Main;

public class SelectResonGui {

	private Plugin plugin = Main.getPlugin(Main.class);

	public void openInv(Player p) {
		
		@SuppressWarnings("unused")
		String Prefix = ChatColor.AQUA + "OmniSky" + ChatColor.GRAY + ">> ";
		String splitter = ChatColor.DARK_GRAY + "+==============+===============+";
		
		Inventory i = plugin.getServer().createInventory(null, 9,ChatColor.GOLD + "Select Reson");
		
		ItemStack BuyingIssues = new ItemStack(Material.PAPER, 1);
		ItemMeta  BuyingIssuesMeta = BuyingIssues.getItemMeta();
		ArrayList<String> BuyingIssueslore = new ArrayList<String>();
		BuyingIssueslore.add(splitter);
		BuyingIssueslore.add(ChatColor.GRAY + "Error occurred while buying Rank");
		BuyingIssueslore.add(ChatColor.GRAY + "So it had to be given manually.");
		BuyingIssueslore.add(splitter);
		BuyingIssuesMeta.setLore(BuyingIssueslore);
		BuyingIssuesMeta.setDisplayName(ChatColor.WHITE +"Buying Issues");
		BuyingIssues.setItemMeta(BuyingIssuesMeta);
		
		ItemStack Promotion = new ItemStack(Material.PAPER, 1);
		ItemMeta  PromotionMeta = Promotion.getItemMeta();
		ArrayList<String> Promotionlore = new ArrayList<String>();
		Promotionlore.add(splitter);
		Promotionlore.add(ChatColor.GRAY + "You got promoted to a higher Rank.");
		Promotionlore.add(splitter);
		PromotionMeta.setLore(Promotionlore);
		PromotionMeta.setDisplayName(ChatColor.GREEN +"Promotion");
		Promotion.setItemMeta(PromotionMeta);
		
		ItemStack Demotion = new ItemStack(Material.PAPER, 1);
		ItemMeta  DemotionMeta = Demotion.getItemMeta();
		ArrayList<String> Demotionlore = new ArrayList<String>();
		Demotionlore.add(splitter);
		Demotionlore.add(ChatColor.GRAY + "You got Demoted.");
		Demotionlore.add(splitter);
		DemotionMeta.setLore(Demotionlore);
		DemotionMeta.setDisplayName(ChatColor.RED +"Demotion");
		Demotion.setItemMeta(DemotionMeta);
		
		ItemStack Other = new ItemStack(Material.BOOK, 1);
		ItemMeta  OtherMeta = Other.getItemMeta();
		ArrayList<String> Otherlore = new ArrayList<String>();
		Otherlore.add(splitter);
		Otherlore.add(ChatColor.GRAY + "Other");
		Otherlore.add(splitter);
		OtherMeta.setLore(Otherlore);
		OtherMeta.setDisplayName(ChatColor.GOLD +"Other");
		Other.setItemMeta(OtherMeta);
		
		i.setItem(0, BuyingIssues);
		i.setItem(1, Promotion);
		i.setItem(2, Demotion);
		i.setItem(3, Other);		
		
		p.openInventory(i);
	}
}
