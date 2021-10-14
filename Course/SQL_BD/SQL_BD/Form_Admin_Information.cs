using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Information : Form
    {
        public Form_Admin_Information()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FA = new Form_Admin();
            FA.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }
    }
}
