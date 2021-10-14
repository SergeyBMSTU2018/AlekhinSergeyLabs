using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Statistics : Form
    {
        public Form_Admin_Statistics()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form FASB = new Form_Admin_Statistics_Bill();
            FASB.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form FAST = new Form_Admin_Statistics_Top();
            FAST.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form FASS = new Form_Admin_Statistics_Seller();
            FASS.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Form FASM = new Form_Admin_Statistics_Premium();
            FASM.Show();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FA = new Form_Admin();
            FA.Show();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }
    }
}
