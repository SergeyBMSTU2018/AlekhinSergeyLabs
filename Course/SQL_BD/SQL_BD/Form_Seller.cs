using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Seller : Form
    {
        public Form_Seller()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FSS = new Form_Seller_Shops();
            FSS.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FSP = new Form_Seller_Products_NotUsed();
            FSP.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FSP = new Form_Seller_Product_availability();
            FSP.Show();
        }

        private void button2_Click_1(object sender, EventArgs e)
        {
            this.Close();
            Form FSN = new Form_Seller_NewBuy();
            FSN.Show();
        }
    }
}
