using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Statistics_Top : Form
    {
        public Form_Admin_Statistics_Top()
        {
            InitializeComponent();
        }

        private void Form_Admin_Statistics_Top_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "BD_Shop_4semDataSet.Admin_Top_prod". При необходимости она может быть перемещена или удалена.
            this.Admin_Top_prodTableAdapter.Fill(this.BD_Shop_4semDataSet.Admin_Top_prod);

            this.reportViewer1.RefreshReport();
        }
    }
}
