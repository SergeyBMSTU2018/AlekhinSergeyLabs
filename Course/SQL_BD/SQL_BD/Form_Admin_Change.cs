using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Change : Form
    {
        public Form_Admin_Change()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FACB = new Form_Admin_Change_Bill();
            FACB.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FACB = new Form_Admin_Change_Buy();
            FACB.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FACC = new Form_Admin_Change_Customer();
            FACC.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FACP = new Form_Admin_Change_Product();
            FACP.Show();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FACPa = new Form_Admin_Change_Product_availability();
            FACPa.Show();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FACS = new Form_Admin_Change_Seller();
            FACS.Show();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FACS = new Form_Admin_Change_Shop();
            FACS.Show();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FA = new Form_Admin();
            FA.Show();
        }

        private void button9_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }
    }
}
